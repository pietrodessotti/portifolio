/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react';

type GradientProps = {
  type?: 'Circle' | 'Bar' | 'Arrow' | 'Title' | 'Button';
  text?: string;
  handleClick?: () => void;
  icon?: ReactElement;
  optionalStyled?: string;
  children?: JSX.Element;
  nameButton?: string;
};

/**
 * @export
 * @component
 * @name Gradient
 *
 * @description
 * Responsible for create one element with gradient,
 * could it be Circle, Bar Arrow, Title or Button.
 */
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

      {type === 'Bar' && (
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
        <button
          name={nameButton}
          type="button"
          className={`relative z-10 my-6 px-6 py-3 ${
            optionalStyled || 'text-base'
          } rounded-full ${backgroundGradient}
        `}
          onClick={handleClick}
        >
          {text || children}
          {/* <div className={`absolute -inset-1 ${backgroundGradient} rounded-full blur `}  /> */}
        </button>
      )}
    </>
  );
}
