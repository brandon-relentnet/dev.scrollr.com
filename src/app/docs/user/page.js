"use client";

import { DocLayout } from '../components/DocLayout';
import { userNavigation } from './navigation';

export default function UserDocsPage() {
  return <DocLayout navigation={userNavigation} />;
}