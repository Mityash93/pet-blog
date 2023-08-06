import { FC, useState } from 'react'
import classNames from 'classnames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.witchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher /> */}
      </div>
    </div>
  )
}
