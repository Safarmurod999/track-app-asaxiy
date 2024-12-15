import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { useLocation } from 'react-router'

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <Breadcrumb>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Breadcrumb.Item key={name} className='text-capitalize fs-4' active>{name}</Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={name} href={routeTo} className='text-capitalize fs-4'>{name}</Breadcrumb.Item>
        );
      }
      )}
    </Breadcrumb>)
}

export default Breadcrumbs