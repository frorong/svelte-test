import { error } from '@sveltejs/kit'

interface Params {
  slug: string
}

export async function load({
  params,
}: {
  params: Params
}) {
  try {
    const post = await import(
      `../../../constant/blogs/${params.slug}.md`
    )

    return {
      content: post.default,
      meta: post.metadata,
    }
  } catch (e) {
    throw error(
      404,
      `Could not find ${params.slug}`
    )
  }
}
