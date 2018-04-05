import styled from 'styled-components'

const Header = styled.div`

`;

export const Quiz = () => (
    <div>
        <Header>
            <PageIndicator />
            <QuestionText />
            <Button>Дальше</Button>
        </Header>
        <AnswerSelect />
    </div>
)