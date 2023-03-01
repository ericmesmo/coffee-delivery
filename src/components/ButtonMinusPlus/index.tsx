import { Minus, Plus } from 'phosphor-react'
import { ActionsContainer } from './styles'

interface ButtomMinusPlusProps {
    qtyCoffee: number
    handleAddQtyCoffee: () => void
    handleRemoveQtyCoffee: () => void
}

export function ButtonMinusPlus({
    qtyCoffee,
    handleAddQtyCoffee,
    handleRemoveQtyCoffee,
}: ButtomMinusPlusProps) {
    const isButtonMinusDisabled = qtyCoffee <= 1

    return (
        <ActionsContainer>
            <button
                disabled={isButtonMinusDisabled}
                onClick={handleRemoveQtyCoffee}
            >
                <Minus size={14} weight="bold" />
            </button>
            <span>{qtyCoffee}</span>
            <button onClick={handleAddQtyCoffee}>
                <Plus size={14} weight="bold" />
            </button>
        </ActionsContainer>
    )
}
