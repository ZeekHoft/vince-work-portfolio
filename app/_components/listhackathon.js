import React from 'react'
import Displayprojct from "./displayprojct";

export default function ListHackathon() {
    return (
        <>
            <Displayprojct
                imgSrc={"./loan.png"}
                title={"Money Frenzy"}
                link={"https://github.com/ZeekHoft/MoneyFrenzy"}
                context={"My 2nd solo competetion where I won 'Best Gameplay' award in Technology Go:indie Games 2024 where the theme was money, my gameplay had simillar mechanics as vampire survivors and attracted a lot of audience.  "}
                badges={[
                    { name: 'Godot', icon: '🤖', bgColor: '#1a222d', borderColor: '#478cbf', textColor: '#478cbf' },
                    { name: 'GDScript', icon: '📜', bgColor: '#170c32', borderColor: '#3c1e70', textColor: '#ab7df8' },
                    { name: 'Game Design', icon: '🕹️', bgColor: '#05998b1a', borderColor: '#05998b', textColor: '#05998b' }
                ]}
            />

            <Displayprojct
                imgSrc={"./byteblade.png"}
                title={"Byte Blade"}
                link={"https://github.com/ZeekHoft/Byte-Blade"}
                context={"Our college hosted PvP or Programmer vs Programmer where we were only two in out team I was the developer and he was the designer. Our game had the same mechanics as fruit ninja, the twist was it tracks your movement to slice the devices which was corrupted instead of fruits. "}
                badges={[
                    { name: 'OpenCV', icon: '👁️', bgColor: '#000000', borderColor: '#ff0000', textColor: '#ffffff' },
                    { name: 'NumPy', icon: '🔢', bgColor: '#0132431a', borderColor: '#013243', textColor: '#4dabcf' },
                    { name: 'Pygame', icon: '🛠️', bgColor: '#1a1a1a', borderColor: '#333333', textColor: '#ffffff' },
                    { name: 'Action', icon: '⚔️', bgColor: '#1e1610', borderColor: '#452b1e', textColor: '#ff9100' }
                ]}
            />

            <Displayprojct
                imgSrc={"./aswang.png"}
                title={"Aswang Busters"}
                link={"https://github.com/ZeekHoft/Nov_DevCon"}
                context={"A group hackathon during 2024, my 2nd hackathon but now with a group, we won 1st runner up because of our unique control and approach to the theme aswang or ghosts."}
                badges={[
                    { name: 'Joycon', icon: '🎮', bgColor: '#ff3c281a', borderColor: '#ff3c28', textColor: '#ff3c28' },
                    { name: 'PyAutoGUI', icon: '🤖', bgColor: '#1a1d12', borderColor: '#3a3f24', textColor: '#c5f200' },
                    { name: 'Pygame', icon: '👾', bgColor: '#1e141a', borderColor: '#3e1d2d', textColor: '#cf649a' },
                    { name: 'Ghosts/Aswang', icon: '💀 ', bgColor: '#757274', borderColor: '#3e1d2d', textColor: '#cf649a' }

                ]}
            />

            <Displayprojct
                imgSrc={"./isekai.png"}
                title={"Isekai Truck"}
                link={"https://github.com/h1tmd/fantasy-truck-game"}
                context={"My last competetion with our small group, the theme was transportation. Our game was called “Isekai Truck” is a mobile game where the player must learn to properly navigate a fantasy environment using a truck. As a modern-day driver summoned into another world, you will be tasked with fulfilling the quests from residents while avoiding numerous obstacles along the way."}
                badges={[
                    { name: 'Godot', icon: '🧠', bgColor: '#1a1a1a', borderColor: '#4ade80', textColor: '#4ade80' },
                    { name: 'GDScript', icon: '⚙️', bgColor: '#0d1729', borderColor: '#1e3a5f', textColor: '#027dfd' },
                    { name: 'Fantasy', icon: '⚔️', bgColor: '#362d591a', borderColor: '#362d59', textColor: '#ffffff' }
                ]}
            />

        </>
    )
}