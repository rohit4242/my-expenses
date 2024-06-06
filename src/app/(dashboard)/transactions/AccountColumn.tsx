import { useOpenAccount } from '@/features/accounts/hooks/use-open-account';
import { FC } from 'react'

interface AccountColumnProps {
  account: string;
  accountId: string
}


const AccountColumn: FC<AccountColumnProps> = ({ account, accountId}) => {
  
    const { onOpen: onOpenAccount} = useOpenAccount();
    const onClick = () => {
        onOpenAccount(accountId)
    }
    return (
        <div onClick={onClick} className='flex items-center cursor-pointer hover:underline'>
            {account}
        </div>
    )
}

export default AccountColumn