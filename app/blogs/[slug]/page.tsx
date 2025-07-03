import { blogPosts } from '@/app/blogs/blogData';
import SingleBlogClient from '@/app/components/SingleBlogClient';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Lubeck Elevators Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Lubeck Elevators Blog`,
      description: post.excerpt,
      url: `https://lubeckelevators.com/blogs/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      title: `${post.title} | Lubeck Elevators Blog`,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://lubeckelevators.com/blogs/${post.slug}`,
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lubeckelevators.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blogs',
        item: 'https://lubeckelevators.com/blogs'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://lubeckelevators.com/blogs/${post.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SingleBlogClient post={post} />
    </>
  );
} 