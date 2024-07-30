import { useCount } from '@/store/count'
import ActionButton from '@/components/ActionButton'
import { useRandomNumber } from '@/hooks/useRandomNumber';

function Index() {
  const count = useCount();
  const [randomNumber] = useRandomNumber();

  return (
    <>
      {count}
      <ActionButton />
      {randomNumber}
    </>
  )
}

export default Index;
