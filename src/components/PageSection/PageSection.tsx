import React from 'react';

type Props = {
    children: React.ReactNode
};

function PageSection({children}: Props) {
    return (
        <>
            {children}
        </>
    )
}

export default PageSection;