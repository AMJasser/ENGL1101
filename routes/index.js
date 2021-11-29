const express = require("express");
const asyncHandler = require("../middleware/async");

const router = express.Router({ mergeParams: true });

// @desc      Get index page
// @route     GET /
// @access    Public
router.get(
    "/",
    asyncHandler(async (req, res, next) => {
        return res.status(200).render("index", (err, html) => {
            if (err) {
                return res.send("Error Happened");
            } else {
                res.send(html);
            }
        });
    })
);

module.exports = router;