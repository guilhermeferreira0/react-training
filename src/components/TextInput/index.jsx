import './styles.css';

export const TextInput = ({searchValue, handleChange}) => {
    return (
        <input 
            type="search" 
            value={searchValue}
            className='input-search'
            onChange={handleChange}
            placeholder='Type your text'
      />
    )
}