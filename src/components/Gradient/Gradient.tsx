/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react';

type GradientProps = {
  type?: 'Circle' | 'Bar' | 'Arrow' | 'Title' | 'Button' | 'TimeLine';
  text?: string;
  handleClick?: () => void;
  icon?: ReactElement;
  optionalStyled?: string;
  children?: JSX.Element;
  nameButton?: string;
};

export function Gradient({
  type = 'Circle',
  text,
  handleClick,
  icon,
  optionalStyled,
  children,
  nameButton,
}: GradientProps): JSX.Element {
  const backgroundGradient = 'bg-gradient-to-r from-[#a84ccf] to-[#00c2af]';

  return (
    <>
      {type === 'Circle' && (
        <div className={`w-3 h-3 ${backgroundGradient} rounded-full`} />
      )}

      {type === 'TimeLine' && (
        <div className="lg:flex lg:items-center">
          <div className={`w-3 h-3 ${backgroundGradient} rounded-full`} />
          <div className="bg-white ml-1 w-1 h-full lg:w-full lg:h-1 lg:ml-0" />
        </div>
      )}

      {type === 'Bar' && (
        // <div className="relative w-full h-3 bg-dark-blue-bar rounded-full">
        //   </div>
        <div
          className={`absolute ${optionalStyled} ${backgroundGradient} rounded-full`}
        />
      )}

      {type === 'Arrow' && <div>{icon} arrow</div>}

      {type === 'Title' && (
        <h1
          className={`${
            optionalStyled || 'text-2xl'
          } font-extrabold text-transparent bg-clip-text ${backgroundGradient}`}
        >
          {text}
        </h1>
      )}
      {type === 'Button' && (
        <div>
          <button
            name={nameButton}
            type="button"
            className={`my-6 px-6 py-3 ${
              optionalStyled || 'text-base'
            } rounded-full ${backgroundGradient}`}
            onClick={handleClick}
          >
            {text || children}
          </button>
        </div>
      )}
    </>
  );
}
