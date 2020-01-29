
const CL = 10;
const PL = 20;

exports.getLeaves = (req, res) => {

    res.status(200).json({
        CL: CL,
        PL: PL
    })
}
