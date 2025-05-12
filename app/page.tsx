import { redirect } from 'next/navigation';

export default function Home() {
  // This page should not be rendered directly
  // Instead, we'll use the (public) route group
  redirect('/home');
}
