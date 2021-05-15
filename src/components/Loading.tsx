import { FC } from 'react'

interface ILoadingProps {
    loading: boolean;
}


const Loading: FC<ILoadingProps> = (props) => {

    const { loading, children } = props;

    if (loading) {
        return <>Loading...</>;
    }

    return (
        <>
            {children}
        </>
    )
}

export default Loading
