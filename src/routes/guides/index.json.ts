export async function GET() {
  const guides = [
    { id: 1, title: 'some title 1' },
    { id: 2, title: 'some title 2' },
    { id: 3, title: 'some title 3' },
  ]
  
  return {
    status: 200,
    body: { 
      guides
    }
  }
}