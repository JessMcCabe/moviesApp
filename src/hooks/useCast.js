import { useEffect, useState } from "react";
import {getCastMember} from '../api/tmdb-api'

const useCast = id => {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    getCastMember(id).then(cast => {
      setCast(cast);
    });
  }, [id]);
  return [cast, setCast];
};

export default useCast