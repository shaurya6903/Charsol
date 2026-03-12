const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-[30vh]">
      <h1 className="font-headline text-2xl font-bold tracking-tight text-black">
        404 Not Found
      </h1>
      <hr className="w-full max-w-md my-4 border-t border-black/20" />
      <p className="text-sm text-black/50 font-body">cloudflare</p>
    </div>
  );
};

export default NotFound;
