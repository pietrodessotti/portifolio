import React from 'react';

type ContentTecnologiesProps = {
  tecnologie: string;
  level: string;
  children: JSX.Element;
};

export function ContentTecnologies({
  tecnologie,
  level,
  children,
}: ContentTecnologiesProps): JSX.Element {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <p className="lg:text-base">{tecnologie}</p>
        <p className="text-gray">{level}</p>
      </div>

      <div className="my-2 relative w-full h-3 bg-dark-blue-bar rounded-full">
        {children}
      </div>
    </div>
  );
}
