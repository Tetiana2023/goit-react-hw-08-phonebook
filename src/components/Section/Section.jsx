import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
    return (
        <>
        {title && <h1 className={css.title}>{title}</h1>}
        {children}
        </>
    )
}
Section.propType ={
    title:PropTypes.string.isRequired,
}