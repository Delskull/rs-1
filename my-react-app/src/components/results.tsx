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
            <div className="flex flex-col justify-center items-center gap-4">
                Results
                {items.map((item) => (
                    <div key={item.id} className="flex gap-24 items-center">
                        <img className="w-32 h-32 object-cover" src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        )
    }
}
export default Results