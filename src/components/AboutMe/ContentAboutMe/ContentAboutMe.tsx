import React from 'react';

type ContentAboutMeProps = {
  year: string;
  text: string;
  children: JSX.Element;
};

export function ContentAboutMe({
  year,
  text,
  children,
}: ContentAboutMeProps): JSX.Element {
  return (
    <div className="my-6 flex justify-between text-sm lg:block">
      <p className="lg:text-base lg:mb-6 lg:font-bold">{year}</p>
      <div className="lg:flex lg:items-center">
        {children}
        <div className="bg-white ml-1 w-1 h-full lg:w-full lg:h-1 lg:ml-0" />
      </div>
      <p className="w-2/5 text-sm text-gray lg:mt-6 lg:w-4/5">{text}</p>
    </div>
  );
}
