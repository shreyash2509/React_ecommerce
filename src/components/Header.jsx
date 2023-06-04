import React from 'react'

export const Header = () => {
  return (
    <div className="flex justify-between">
        <div class="flex-initial w-50 ...">
            <img src="/images/menu.svg" alt="" width={50}/>
        </div>
        <div class="flex-initial w-50 ...">
            <img className="rounded-full" src="/images/user (2).png" alt="" width={50}/>
        </div>
    </div>
  )
}

export default Header;