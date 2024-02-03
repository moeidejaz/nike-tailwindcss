import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section className="flex flex-col justify-between items-center gap-5 lg:flex-row padding-x padding-y">
      <h3 className="font-secondary text-5xl font-bold lg:max-w-xs leading-[68px]">
        Sign Up from <span className="text-coral-red">Updates</span> &
        Newsletter
      </h3>

      <div className="py-2 px-4 border border-slate-gray text-slate-gray rounded-full w-full lg:w-[40%] flex items-center justify-between">
        <input
          type="email"
          placeholder="hello@nike.com"
          className="outline-none"
        />
        <Button label="Signup" />
      </div>
    </section>
  );
};

export default Subscribe;
