import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useCallback, useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  STOCK_PRESETS,
  CRYPTO_PRESETS,
  STOCK_OPTIONS,
  CRYPTO_OPTIONS,
} from "@/data/dataProvider";
import {
  toggleFinanceCategory,
  setFinancePreset,
  toggleFinanceSelection,
  setFinanceSearch,
  resetFinanceSelections,
  toggleAllFinanceSelections,
} from "@/store/financeSlice.js";

export function FinanceSection() {
  const dispatch = useDispatch();
  const financeState = useSelector((state) => state.finance);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getSelected = useCallback(
    (type) => {
      const settings = financeState[type];
      if (!settings?.customSelections) return [];
      return Object.keys(settings.customSelections).filter(
        (key) => settings.customSelections[key]
      );
    },
    [financeState]
  );

  const getFilteredOptions = useMemo(() => {
    const filterOptions = (type) => {
      // Add fallback empty array if options are undefined
      const options =
        type === "stocks" ? STOCK_OPTIONS || [] : CRYPTO_OPTIONS || [];

      const searchTerm = financeState[type]?.searchTerm?.toLowerCase() || "";

      // If search term is empty, return all options
      if (!searchTerm) {
        return options;
      }

      return options.filter(
        (option) =>
          option.symbol?.toLowerCase()?.includes(searchTerm) ||
          option.name?.toLowerCase()?.includes(searchTerm) ||
          option.label?.toLowerCase()?.includes(searchTerm) ||
          option.key?.toLowerCase()?.includes(searchTerm)
      );
    };

    return {
      stocks: filterOptions("stocks"),
      crypto: filterOptions("crypto"),
    };
  }, [financeState]);

  const openModal = useCallback(
    (type) => {
      dispatch(setFinancePreset({ category: type, preset: "custom" }));
      const modal = document.getElementById(`my_modal_${type}`);
      if (modal) modal.showModal();
    },
    [dispatch]
  );

  const handleSearchChange = useCallback(
    (type, value) => {
      dispatch(setFinanceSearch({ category: type, term: value }));
    },
    [dispatch]
  );

  const renderPresetOptions = useCallback(
    (type) => {
      const presets = type === "stocks" ? STOCK_PRESETS : CRYPTO_PRESETS;
      const icon = type === "stocks" ? "📈" : "₿";
      const label = type === "stocks" ? "Stocks" : "Crypto";
      const settings = financeState[type] || {
        enabled: false,
        activePreset: null,
      };
      const selectedCount = getSelected(type).length;

      return (
        <div>
          <label
            className={`${
              !settings.enabled ? "text-base-content/50" : "text-base-content"
            } .label btn btn-ghost justify-between flex items-center`}
          >
            {icon} {label}
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={settings.enabled}
              onChange={() => {
                dispatch(toggleFinanceCategory({ category: type }));
              }}
            />
          </label>

          {settings.enabled && (
            <div className="space-y-2 p-2 ml-2 border-l border-base-300/50">
              {presets.map((preset) => (
                <label
                  key={preset.key}
                  className={`${
                    settings.activePreset === preset.key
                      ? "text-base-content font-semibold"
                      : "text-base-content/50"
                  } label cursor-pointer justify-start gap-3`}
                >
                  <input
                    type="radio"
                    name={`${type}-preset`}
                    className={`radio radio-sm ${
                      settings.activePreset === preset.key
                        ? "radio-primary"
                        : ""
                    }`}
                    checked={settings.activePreset === preset.key}
                    onChange={() => {
                      dispatch(
                        setFinancePreset({ category: type, preset: preset.key })
                      );
                    }}
                  />
                  <span className="label-text">{preset.label}</span>
                </label>
              ))}
              <label
                className={`${
                  settings.activePreset === "custom"
                    ? "text-base-content font-semibold"
                    : "text-base-content/50"
                } label cursor-pointer justify-start gap-3`}
              >
                <input
                  type="radio"
                  name={`${type}-preset`}
                  className={`radio radio-sm ${
                    settings.activePreset === "custom" ? "radio-primary" : ""
                  }`}
                  checked={settings.activePreset === "custom"}
                  onChange={() => openModal(type)}
                  onClick={() => openModal(type)}
                />
                <span className="label-text">{selectedCount} selected</span>
              </label>
            </div>
          )}
        </div>
      );
    },
    [financeState, getSelected, openModal, dispatch]
  );

  const renderModal = useCallback(
    (type) => {
      const options =
        type === "stocks" ? STOCK_OPTIONS || [] : CRYPTO_OPTIONS || [];
      const filtered = getFilteredOptions[type];
      const title = type === "stocks" ? "Stock" : "Crypto";
      const placeholder =
        type === "stocks"
          ? "Search stocks by name or symbol..."
          : "Search cryptocurrencies by name or symbol...";
      const settings = financeState[type] || {
        searchTerm: "",
        customSelections: {},
      };
      const selectedCount = getSelected(type).length;

      return (
        <dialog id={`my_modal_${type}`} className="modal">
          <div className="modal-box max-w-2xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Custom {title} Selection</h3>

            <div className="form-control w-full my-4">
              <input
                type="text"
                placeholder={placeholder}
                className="input input-bordered w-full"
                value={settings.searchTerm || ""} // Changed from defaultValue to value
                onChange={(e) => handleSearchChange(type, e.target.value)}
              />
            </div>

            <div className="flex gap-2 mb-4">
              <button
                className="btn btn-sm btn-outline"
                onClick={() =>
                  dispatch(
                    toggleAllFinanceSelections({
                      category: type,
                      selectAll: true,
                    })
                  )
                }
              >
                Select All
              </button>
              <button
                className="btn btn-sm btn-outline"
                onClick={() =>
                  dispatch(
                    toggleAllFinanceSelections({
                      category: type,
                      selectAll: false,
                    })
                  )
                }
              >
                Deselect All
              </button>
              <button
                className="btn btn-sm btn-ghost"
                onClick={() =>
                  dispatch(resetFinanceSelections({ category: type }))
                }
              >
                Reset to Default
              </button>
              {settings.searchTerm && (
                <button
                  className="btn btn-sm btn-ghost"
                  onClick={() =>
                    dispatch(setFinanceSearch({ category: type, term: "" }))
                  }
                >
                  Clear Search
                </button>
              )}
            </div>

            <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
              {options.length === 0 ? (
                <div className="text-center text-base-content/50 py-4">
                  <p>No {type} data available.</p>
                  <p className="text-sm mt-2">
                    Please check your data file imports.
                  </p>
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center text-base-content/50 py-4">
                  No {type} found matching your search
                </div>
              ) : (
                filtered.map((option) => (
                  <label
                    key={option.key}
                    className={`${
                      settings.customSelections[option.key]
                        ? "bg-base-200"
                        : "bg-base-200/50"
                    } label cursor-pointer justify-start gap-3 btn btn-ghost text-left`}
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={settings.customSelections[option.key] || false}
                      onChange={() =>
                        dispatch(
                          toggleFinanceSelection({
                            category: type,
                            key: option.key,
                          })
                        )
                      }
                    />
                    <div className="flex flex-col items-start">
                      <span className="label-text font-semibold">
                        {option.key || option.symbol}
                      </span>
                      <span className="label-text text-sm text-base-content/70">
                        {option.label || option.name}
                      </span>
                    </div>
                  </label>
                ))
              )}
            </div>

            <div className="text-sm text-base-content/70 mt-4 flex justify-between">
              <span>
                {selectedCount} of {options.length} {type} selected
              </span>
              {settings.searchTerm && (
                <span>Showing {filtered.length} results</span>
              )}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      );
    },
    [
      financeState,
      getFilteredOptions,
      getSelected,
      handleSearchChange,
      dispatch,
    ]
  );

  return (
    <>
      {isMounted && (
        <>
          <fieldset className="fieldset group bg-base-100 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend mx-auto text-lg py-0">
              <div className="tooltip tooltip-bottom card card-border border-base-300 flex-row items-center justify-center gap-1 px-4 py-1 group-hover:bg-base-200 transition-all duration-150">
                <div className="tooltip-content w-60 px-4 py-3">
                  Select your preferred trades to display on Scrollr. You can
                  also add custom selections.
                </div>
                <InformationCircleIcon className="size-5 text-base-content/30 group-hover:text-base-content/70 transition-all duration-150" />
                Finance
              </div>
            </legend>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {renderPresetOptions("stocks")}
              {renderPresetOptions("crypto")}
            </div>
          </fieldset>

          {/* Modals */}
          {renderModal("stocks")}
          {renderModal("crypto")}
        </>
      )}
    </>
  );
}
