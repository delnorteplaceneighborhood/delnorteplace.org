// import { remark } from 'remark'
// import html from 'remark-html'
import fs from 'fs'
import path from 'path'

import {bundleMDX} from 'mdx-bundler'

async function getData(directory, id){
  const fullPath = path.join(directory, `${id}.mdx`)
  const mdxSource = fs.readFileSync(fullPath, 'utf8')

  // console.log(mdxSource)

  // Use mdx-loader
  const result = await bundleMDX({
    source: mdxSource,
  })

  // console.log(matterResult)

  const {code, frontmatter} = result

  // console.log(code)

  const ret = {
    id,
    code,
    // ...matterResult.data,
    frontmatter
  }
  // console.log(ret)
  return ret
}

// process.cwd() is run at the root level of this project
export async function getIndexData(id) {
  const contentDirectory = path.join(process.cwd(), 'src/content/')
  const ret = await getData(contentDirectory, id)
  // console.log(ret)
  return ret
}