export const Stepper = ({ step }: { step: number }) => {
  return (
    <div className="flex items-center justify-between mb-10">
      {[1, 2, 3].map((s, i) => (
        <div key={s} className="flex items-center w-full">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold
            ${
              step === s
                ? "bg-green-700 text-white"
                : step > s
                  ? "bg-green-500 text-white"
                  : "bg-green-200 text-green-800"
            }`}
          >
            {s}
          </div>

          {i !== 2 && <div className="flex-1 h-0.5 mx-2 bg-green-300" />}
        </div>
      ))}
    </div>
  );
};
