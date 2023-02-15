import React from 'react';

type ContentAboutMeProps = {
  year: string;
  text: string;
  children: JSX.Element;
  timeLine: boolean;
};

export function ContentAboutMe({
  year,
  text,
  children,
  timeLine,
}: ContentAboutMeProps): JSX.Element {
  return (
    <div className="flex justify-between text-sm lg:block">
      <p className="lg:text-base lg:mb-6 lg:font-bold">{year}</p>
      <div className="lg:flex lg:items-center">
        {children}
        {timeLine && (
          <div className="bg-white m-auto w-1 h-full lg:w-full lg:h-1" />
        )}
      </div>
      <p className="mb-6 w-2/5 text-sm text-gray lg:mt-6 lg:w-4/5">{text}</p>
    </div>
  );
}
