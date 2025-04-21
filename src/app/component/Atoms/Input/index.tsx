'use client';
import { useRef } from 'react';
import type { FC, KeyboardEvent } from 'react';
// KeyboardEventはキーボードの押し方を取得するための型

type InputProps = {
  // 外部から渡されるデータの型定義
  onEditComplete: (value: string) => void; //文字列を受け取る
  //onEditCompleteは編集が終わったときに呼ばれる関数

  defaultValue?: string; //初期値
};

//: FC<InputProps> Reactの関数コンポーネントの型を指定している
const Input: FC<InputProps> = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  //inputRefはinput要素を参照するためのref

  // handleBlurは 他のとこクリックした時の動きを決めてる関数
  const handleBlur = () => {
    if (inputRef.current) {
      onEditComplete(inputRef.current.value);
    }
  };

  // キー押されたかどうかを判定する関数
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // enterキーに対して
      if (inputRef.current) {
        onEditComplete(inputRef.current.value);
      }
    }
  };

  return (
    <div className='w-full min-h-[24px] rounded-[2px] bg-[#232324] px-[4px] py-[2px]'>
      <input
        type='text'
        ref={inputRef}
        // input要素を参照するためのref
        onBlur={handleBlur}
        // input要素からフォーカスが外れたときに呼ばれる関数
        onKeyDown={handleKeyDown}
        // input要素でキーが押されたときに呼ばれる関数
        defaultValue={defaultValue ?? ''}
        // defaultValueは初期値を設定するためのプロパティ
        className='w-full bg-transparent text-[#B8B8B8] outline-none font-noto'
      />
    </div>
  );
};

export default Input;
