import PostDetails from './components/PostDetails'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    return <PostDetails id={id}/>
}
export default page
