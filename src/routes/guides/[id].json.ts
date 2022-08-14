export async function GET({ params }: any) {
  const guides = [
    { id: 1, title: 'some title 1', body: 'lorem ipsum 1' },
    { id: 2, title: 'some title 2', body: 'lorem ipsum 2' },
    { id: 3, title: 'some title 3', body: 'lorem ipsum 3' },
  ]

  const guide = guides.find(g => g.id === params.id)

  if (guide) {
    return {
      status: 200,
      body: { guide }
    }
  }

  return {
    status: 404
  }
}