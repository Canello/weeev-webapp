import './Spacer.scss';

// dirs -> x, y
// sizes -> xxs, xs, s, m, l, xl, xxl

export const Spacer = ({ dir='y', size='m' }) => <div className={`Spacer ${dir}-${size}`} />;