import { createRoot } from 'react-dom/client'

type BoxProps = React.ComponentProps<'div'> & {
	size?: 'small' | 'medium' | 'large'
}

export function Box({
	// 💯 you can keep the style and className props here, but you can make this
	// still work if you remove them. Give that a shot if you want.
	style = {},
	size,
	// 🐨 add a size prop here
	...otherProps // 🦺 intersect (&) this with an object that has a size prop type here which is
	// optional and is one of "small", "medium", or "large"
}: BoxProps) {
	// 🐨 based on the size prop, define a new variable called sizeClassName
	const sizeClassName = !!size ? `box--${size}` : ''
	return (
		<div
			// 🐨 add the sizeClassName to the className prop
			// 💯 for something extra, handle the case where no className is given (remove extra spaces).
			className={`box ${sizeClassName}`}
			style={{ fontStyle: 'italic', ...style }}
			{...otherProps}
		/>
	)
}

function App() {
	return (
		<div>
			{/* 🐨 update all these boxes to use the size prop */}
			<Box size="small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box size="medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box size="large" style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
