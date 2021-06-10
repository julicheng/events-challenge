interface Props {
  message?: string;
}

export default function PageNotFound({ message }: Props) {
  return (
    <div className='text-center my-10'>
      {message ? message : `Page not found`}
    </div>
  );
}
