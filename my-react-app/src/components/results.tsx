import React from "react";

interface character {
    id: number
    name: string
    image: string
}
interface resultProps {
    items: character[]
}

class Results extends React.Component<resultProps> {
    render() {
        const {items} = this.props

        return (
            <div className="flex justify-center items-center h-64 gap-4">
                {items.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        )
    }
}
export default Results