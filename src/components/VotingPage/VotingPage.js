import styled from 'styled-components/macro'

export default function VotingPage() {
  return (
    <VotingPageLayout>
      Reading is to the mind what exercising is to the body. ✨
    </VotingPageLayout>
  )
}
const VotingPageLayout = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  font-size: 200%;
  padding: 30%;
`
