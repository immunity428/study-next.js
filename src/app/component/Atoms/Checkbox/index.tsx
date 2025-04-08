import React from 'react';
import Check from '../../../../../public/check.svg';

const Checkbox = () => {
  return (
    <div className='w-5 h-5 border-[2px] border-[#B8B8B8] flex items-center justify-center group'>
      <Check className='hidden group-hover:block' />

      {/* このコードだと✅が正方形の中央に来ないので、checkのサイズを指定するとhoverがつかえなくなる。 */}
    </div>
  );
};

export default Checkbox;
