import Image from "next/image";

export default function LabResults({ list }) {
  return (
    <div className="lab-results-section card">
      <h3 className="card-title">Lab Results</h3>

      <dvi className="labs-list">
        {!list || list.length <= 0 ? null : (
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <span className="lab-name">{item}</span>
                <Image
                  src="/img/IconDownload.svg"
                  alt="Download"
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>
        )}
      </dvi>
    </div>
  );
}
