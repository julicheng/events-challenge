interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className='bg-gray-200 min-h-full min-w-full'>{children}</div>;
}
