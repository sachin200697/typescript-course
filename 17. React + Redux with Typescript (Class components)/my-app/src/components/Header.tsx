import React from 'react';

interface HeaderProps {
    text: string;
}
export default function Header(props: HeaderProps): JSX.Element {
  return (
    <h2>
      {props.text}
    </h2>
  );
}
