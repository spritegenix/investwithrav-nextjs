import BlogSection from '@/src/components/BlogSection';
import Breadcumb from '@/src/components/Breadcumb';
import PagginationFuntion from '@/src/components/PagginationFuntion';
import Layout from '@/src/layout/Layout';
import { getPagination, pagination } from '@/src/utils';
import Link from 'next/link';
import { articles } from '@/pages/index';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const BlogGrid = () => {
  const [heading, setheading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination('.single_box_', sort, active);
    let list = document.querySelectorAll('.single_box_');
    setstate(getPagination(list.length, sort));
    if (id === 'blog-grid') {
      setheading(false);
    }
  }, [active]);
  return (
    <Layout>
      <Breadcumb pageName={'Blog Grid'} />
      <BlogSection articles={articles} heading={heading} />
    </Layout>
  );
};
export default BlogGrid;
