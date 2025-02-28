export default function HeaderText({ title }) {
    return (
      <div className="flex flex-col justify-center items-center p-12">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <h1 className="absolute text-8xl -z-10 text-primary opacity-10">
          {title}
        </h1>
      </div>
    );
  }
  