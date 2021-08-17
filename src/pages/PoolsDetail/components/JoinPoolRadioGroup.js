import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { RadioGroupItemWrapper } from "../style/JoinPoolModal.style";
import RadialStyle from "../style/RadialGroup.module.css";

const plans = [
  {
    name: "Silver Plan",
  },
  {
    name: "Gold Plan",
  },
];

export default function JoinPoolRadioGroup() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="w-full py-7">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroupItemWrapper className={"rounded-md"}>
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  className={({ active, checked }) =>
                    `${active ? "bg-darkMode-800" : ""}
                  ${checked ? `text-white` : `bg-darkMode-800 ${RadialStyle.DisableRadialBorder}`}
                    relative rounded shadow-md px-5 py-4 cursor-pointer flex focus:outline-none bg-darkMode-800`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium text-lg`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        {checked && (
                          <div className="flex-shrink-0 text-white">
                            <CheckIcon className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              </RadioGroupItemWrapper>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
