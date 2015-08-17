
/**
 * Turn a Subnet Mask into a CIDR prefix
 */
module.exports.cidrize = function(subnet_mask) {
  cidr_bits = 0;

  subnet_mask.split('.').forEach(function(octet) {
    cidr_bits+=((octet >>> 0).toString(2).match(/1/g) || []).length;
  });

  return cidr_bits;
}

module.exports.prefixize   = module.exports.cidrize;
module.exports.toPrefix    = module.exports.cidrize;
module.exports.toClassless = module.exports.cidrize;
module.exports.toCIDR      = module.exports.cidrize;
module.exports.subnet2cidr = module.exports.cidrize;

/**
 * Turn a CIDR prefix into a Subnet Mask
 */
module.exports.subnetize = function(cidr) {
  bits = [];

  while ( bits.length < cidr ) { bits.push(1); }
  while ( bits.length < 32 ) { bits.push(0); }

  octets = []

  octets.push(parseInt(bits.slice(0,8).join(''),2 ));
  octets.push(parseInt(bits.slice(8,16).join(''), 2));
  octets.push(parseInt(bits.slice(16,24).join(''), 2));
  octets.push(parseInt(bits.slice(24,32).join(''), 2));

  return octets.join('.');
}

module.exports.maskize     = module.exports.subnetize;
module.exports.toClassfull = module.exports.subnetize;
module.exports.toSubnet    = module.exports.subnetize;
module.exports.toMask      = module.exports.subnetize;
module.exports.toNetmask   = module.exports.subnetize;
module.exports.cidr2subnet = module.exports.subnetize;
