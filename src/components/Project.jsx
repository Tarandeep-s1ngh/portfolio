import React from 'react'

export const Project = ({projectData}) => {
    const {id, name, coverImage, sourceCode, liveLink} = projectData;
  return (
    <div className="flex flex-col items-center gap-4 pb-4 xl:pb-12">
          <div className="w-full flex justify-evenly items-center">
            <span className="text-6xl md:text-8xl font-bold text-secondaryText">{id}</span>
            <span className="text-accent text-4xl md:text-7xl font-bold">{name}</span>
          </div>

          <div className="w-full px-2 md:px-16 xl:px-44">
            <img
              src={coverImage}
              alt="project cover"
              className="max-w-full h-auto rounded-md"
            />
          </div>

          <div className="w-full flex justify-evenly items-center mb-4 md:text-xl">
            <a
              href={sourceCode}
              alt="source code"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline font-semibold hover:cursor-pointer"
            >
              Source Code
            </a>
            <a
              href={liveLink}
              alt="live project"
              target="_blank"
              rel="noreferrer"
              className="text-mainText underline font-semibold hover:cursor-pointer"
            >
              Live Link
            </a>
          </div>
        </div>
  )
}
