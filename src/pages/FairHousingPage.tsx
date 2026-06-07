import { useEffect } from 'react'

export default function FairHousingPage() {
  useEffect(() => {
    document.title = 'Fair Housing Notice — Island Commercial Realty'
  }, [])

  return (
    <section className="max-w-3xl">
      <p className="text-slate-600">
        Island Commercial Realty is committed to compliance with all federal, state, and local fair housing laws.
        We do not discriminate on the basis of race, color, religion, sex, handicap, familial status, national
        origin, sexual orientation, gender identity, or any other protected class.
      </p>
      <p className="mt-4 text-slate-600">
        For questions regarding fair housing practices, please contact our office.
      </p>
    </section>
  )
}
