import styled from 'styled-components/macro'

export default function VotingPage() {
  return (
    <VotingPageLayout>
      Lesen ist für den Geist was Sport für den Körper ist. ✨
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
