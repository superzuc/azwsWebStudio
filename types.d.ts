export type Data = {
    image: SanityImage,
    projects: Projects[],
    backimage1: SanityImage,
    backimage2: SanityImage,
    backimage3: SanityImage,
    backimage4: SanityImage,
    backimage5: SanityImage,
    backimage6: SanityImage,
}

export interface Project {
  title: string;
  description: string;
  video: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
}

export interface SanityImage {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }

  export interface SanityVideoFile {
    _type: 'file';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  }