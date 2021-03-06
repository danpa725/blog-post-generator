/**
 * @type {".DS_Store"}
 */
const MAC_OS_FILE_EXCEPTION = ".DS_Store";

/**
 * @typedef POSTING
 * @property CURRENT {"Current Category"}
 * @property NEW {"New Category"}
 */

/**
 * @type POSTING
 */
const POSTING_TYPE = {
    CURRENT: "Current Category",
    NEW: "New Category",
};

/**
 * @typedef BLOG_FOLDER_NAME_TYPE
 * @property CONTENTS {"contents"}
 * @property POSTS {"posts"}
 */

/**
 * @type {BLOG_FOLDER_NAME_TYPE}
 */
const BLOG_FOLDER_NAME = {
    CONTENTS: "contents",
    POSTS: "posts",
};

/**
 * @typedef DESCRIPTION_FILE_TYPE
 * @property JSON {"json"}
 * @property TXT {"txt"}
 */

/**
 * @type {DESCRIPTION_FILE_TYPE}
 */
const DESCRIPTION_FILE = {
    JSON: "json",
    TXT: "txt",
};

const GENERATION_TIME = 750;

export {
    MAC_OS_FILE_EXCEPTION,
    POSTING_TYPE,
    BLOG_FOLDER_NAME,
    DESCRIPTION_FILE,
    GENERATION_TIME,
};
