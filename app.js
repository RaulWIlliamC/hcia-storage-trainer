const glossary = {
  raid: {
    title: "RAID",
    simple: "A way to make multiple disks act like one bigger, faster, or safer disk.",
    technical: "Redundant Array of Independent Disks combines physical disks into a logical disk using striping, mirroring, and/or parity.",
    minecraft: "Analogy: several storage drawers are managed as one storage setup. Depending on the rule, the setup may be faster, larger, safer, or some mix of those."
  },
  striping: {
    title: "Striping",
    simple: "Split data into pieces and spread the pieces across disks.",
    technical: "Data is divided into strips, and matching-position strips across disks form stripes. This lets disks work in parallel.",
    minecraft: "Like splitting your ore processing across multiple machines so everything finishes faster instead of one machine doing all work."
  },
  mirroring: {
    title: "Mirroring",
    simple: "Keep a second copy of the same data on another disk.",
    technical: "RAID mirroring writes duplicate data to redundant disks, improving reliability and sometimes read performance.",
    minecraft: "Like keeping the same important items in two ME systems or two backpacks. If one storage breaks, the other still has the items."
  },
  parity: {
    title: "Parity",
    simple: "Extra calculated information that helps rebuild missing data.",
    technical: "Parity is redundancy data calculated from user data, commonly with XOR. It can reconstruct lost data after a disk failure.",
    minecraft: "Analogy: not a duplicate chest, but a recovery pattern calculated from the remaining item groups. If one group is missing, the pattern plus the remaining groups can rebuild it."
  },
  xor: {
    title: "XOR",
    simple: "A math rule used to calculate parity.",
    technical: "Exclusive OR returns true when inputs differ. RAID parity commonly uses XOR to derive recoverable redundancy data.",
    minecraft: "Like a simple on/off redstone rule: the output changes based on which inputs differ."
  },
  hotSpare: {
    title: "Hot Spare",
    simple: "A standby disk that can replace a failed disk.",
    technical: "A reserved spare drive or spare capacity used during reconstruction after disk failure.",
    minecraft: "Analogy: a spare machine casing is already reserved. When one machine breaks, the spare can be used for rebuilding, but the rebuild still takes time."
  },
  rebuild: {
    title: "Rebuild / Reconstruction",
    simple: "The storage system recreates lost data after a disk fails.",
    technical: "Reconstruction uses mirror or parity information to restore valid data onto spare or remaining capacity.",
    minecraft: "Analogy: rebuilding the missing contents of a broken storage drawer using either a duplicate drawer or a recovery pattern plus the remaining drawers."
  },
  raid0: {
    title: "RAID 0",
    simple: "Fast striping with zero protection.",
    technical: "RAID 0 stripes data across at least two disks and provides no mirroring or parity. Any disk failure can cause data loss.",
    minecraft: "Analogy: split item batches across fast parallel lines with no backup chest or recovery pattern. If one line is lost, part of the full item set is gone."
  },
  raid1: {
    title: "RAID 1",
    simple: "Mirroring. Same data on two disks.",
    technical: "RAID 1 writes identical copies to paired disks. Usable capacity is about 50% with two disks, but reliability is high.",
    minecraft: "Two chests with the same items. Expensive on space, but safe."
  },
  raid3: {
    title: "RAID 3",
    simple: "Striping plus one dedicated parity disk.",
    technical: "RAID 3 uses data striping with a dedicated parity disk, which can become a workload bottleneck.",
    minecraft: "Several machines work, but one special machine handles all backup calculations, so that one gets overloaded."
  },
  raid5: {
    title: "RAID 5",
    simple: "Striping plus distributed parity. One disk can fail.",
    technical: "RAID 5 distributes parity across member disks. It tolerates one disk failure, but a second failure before rebuild causes data loss.",
    minecraft: "Analogy: backup-calculation responsibility is spread across the machine wall. One machine can break and the others have enough information to rebuild it."
  },
  raid6: {
    title: "RAID 6",
    simple: "Like RAID 5 but with two parity protections. Two disks can fail.",
    technical: "RAID 6 uses double distributed parity, such as P+Q or DP, and tolerates up to two failed disks.",
    minecraft: "Analogy: two independent recovery patterns are spread through the setup. Updating them costs extra work, but two machines can fail and recovery is still possible."
  },
  raid10: {
    title: "RAID 10",
    simple: "Mirrors first, then stripes. Fast and reliable.",
    technical: "RAID 10 combines RAID 1 and RAID 0. It provides strong random write performance and can tolerate failures depending on which mirror pairs fail.",
    minecraft: "Analogy: each lane has a duplicate backup chest, then item batches are routed across the lanes for speed. Safe unless both chests in the same pair are lost."
  },
  raid50: {
    title: "RAID 50",
    simple: "Two or more RAID 5 groups striped together.",
    technical: "RAID 50 creates RAID 5 sub-arrays and then stripes across them with RAID 0. Two failures in the same RAID 5 sub-array cause data loss.",
    minecraft: "Analogy: multiple backup-capable machine clusters are connected by a fast routing layer. One failure per cluster can be okay, but two failures in the same cluster can break it."
  },
  chunk: {
    title: "Chunk (CK)",
    simple: "A small fixed piece of disk space.",
    technical: "In RAID 2.0+, a physical disk is divided into chunks. Chunks are the basic units used to form RAID-protected groups.",
    minecraft: "Like splitting a huge storage drawer into smaller locked slots that the system can move around."
  },
  ckg: {
    title: "Chunk Group (CKG)",
    simple: "Chunks from different disks grouped with a RAID rule.",
    technical: "A CKG consists of chunks from different disks in the same disk group based on a RAID algorithm. It is the minimum allocation unit from disk domain to storage pool.",
    minecraft: "Analogy: one protected item group is built from slots across different drawers, and the group follows a RAID rule."
  },
  extent: {
    title: "Extent",
    simple: "A smaller logical piece carved from a CKG.",
    technical: "An extent is the minimum unit for migration, hot-data statistics, space application, and space release in a storage pool.",
    minecraft: "Analogy: a smaller bundle inside the storage network that the system can track and move as a unit."
  },
  diskDomain: {
    title: "Disk Domain",
    simple: "A group of disks reserved as a resource area.",
    technical: "A disk domain combines disks, reserves hot spare capacity, and provides resources for storage pools. It can isolate faults and resources.",
    minecraft: "Like one base area dedicated to storage machines. That area feeds storage pools but stays isolated from other bases."
  },
  storagePool: {
    title: "Storage Pool",
    simple: "A container of storage resources for servers.",
    technical: "A storage pool dynamically allocates chunks from a disk domain into CKGs according to tier RAID policies.",
    minecraft: "Like an AE2 storage network pool where drives contribute space and machines request what they need."
  },
  lun: {
    title: "LUN",
    simple: "The storage unit a server can see and use like a disk.",
    technical: "A Logical Unit Number is the external presentation of a volume and can be mapped to hosts for reads and writes.",
    minecraft: "Like exposing one storage drawer or ME drive partition to a specific machine so it can use it."
  },
  dynamicRaid: {
    title: "Dynamic RAID",
    simple: "Huawei flash RAID that adjusts around failed blocks.",
    technical: "Dynamic RAID uses erasure coding and can dynamically adjust CKs in a CKG for SSD-only scenarios, improving flash space utilization.",
    minecraft: "Analogy: if a small part of a flash machine fails, the system rebuilds around that failed part instead of wasting the whole larger setup."
  },
  raidTp: {
    title: "RAID-TP",
    simple: "Triple-parity style protection: three disks can fail.",
    technical: "Huawei RAID-TP uses an optimized FlexEC algorithm to tolerate simultaneous failure of three disks while improving reconstruction behavior and capacity utilization.",
    minecraft: "Analogy: the storage setup has enough recovery information to survive three storage machines failing at the same time, aimed at very large and risky storage setups."
  },
  das: {
    title: "DAS",
    simple: "Storage directly attached to a server.",
    technical: "Direct-attached storage connects storage devices directly to hosts and provides block-level access.",
    minecraft: "Private storage: one server has storage directly attached. Simple and cheap, but weak for sharing and expansion."
  },
  nas: {
    title: "NAS",
    simple: "File storage shared over the network.",
    technical: "Network-attached storage provides file-level access and sharing over IP networks using protocols such as NFS and CIFS/SMB.",
    minecraft: "Shared folder storage: clients access named files over the network. Think file path/share, not raw disk blocks."
  },
  nfs: {
    title: "NFS",
    simple: "A Unix/Linux-style network file sharing protocol.",
    technical: "Network File System is a traditional file sharing protocol in UNIX environments and can use TCP or UDP.",
    minecraft: "Linux/Unix shared folder rule: a client mounts a remote file system and uses it like a directory."
  },
  cifs: {
    title: "CIFS / SMB",
    simple: "A Windows-style network file sharing protocol.",
    technical: "CIFS is based on SMB and is traditionally used in Microsoft environments; it is stateful and commonly uses TCP/IP.",
    minecraft: "Windows shared folder rule: clients authenticate, connect to a share, then read/write files over the network."
  },
  san: {
    title: "SAN",
    simple: "A storage network that usually gives servers block storage.",
    technical: "Storage Area Network commonly uses Fibre Channel or iSCSI and provides raw block device access to hosts.",
    minecraft: "Remote disk storage: the server sees block storage over the network, more like a disk than a shared folder."
  },
  iscsi: {
    title: "iSCSI",
    simple: "SCSI storage commands carried over IP networks.",
    technical: "iSCSI uses TCP/IP-based Ethernet and has initiators and targets identified by IQN names.",
    minecraft: "SAN over Ethernet/IP: SCSI block commands travel through a normal IP network instead of a dedicated FC network."
  },
  fc: {
    title: "FC",
    simple: "A dedicated Fibre Channel storage network.",
    technical: "FC SAN uses Fibre Channel protocol and FC HBAs to carry storage traffic with high performance.",
    minecraft: "Dedicated storage highway: specialized, fast, and usually more expensive than IP-based storage."
  },
  vlan: {
    title: "VLAN",
    simple: "A logical split of one physical LAN into separate broadcast domains.",
    technical: "Virtual LANs isolate services and networks using VLAN IDs from 1 to 4094.",
    minecraft: "Like separate colored cable channels on the same physical network so services stay isolated."
  },
  logicalPort: {
    title: "Logical Port",
    simple: "A virtual service port with an IP address.",
    technical: "Logical ports are created from Ethernet, bond, or VLAN ports and carry host services.",
    minecraft: "Service endpoint: hosts connect to the logical IP, while the storage system decides which physical/bond/VLAN port carries it."
  },
  ipFailover: {
    title: "IP Address Failover",
    simple: "Move a service IP from a failed port to a working port.",
    technical: "IP address failover switches a logical IP address from a faulty Ethernet, bond, or VLAN port to an available port.",
    minecraft: "Same address, new path: if a port fails, the service IP moves to a working port so access continues."
  },
  zoning: {
    title: "Zoning",
    simple: "Controls which FC devices can communicate.",
    technical: "An FC zone is a set of ports or devices that can communicate; members access only other members in the same zone.",
    minecraft: "FC access control: a server can communicate only with storage devices placed in the same zone."
  },
  scaleOut: {
    title: "Scale-out Storage",
    simple: "Add nodes to expand storage capacity and performance.",
    technical: "Scale-out storage organizes local HDDs/SSDs of general-purpose servers into large resource pools and distributes data across nodes.",
    minecraft: "Grow by adding nodes: instead of making one storage box bigger, add more servers that work together."
  },
  scsi: {
    title: "SCSI",
    simple: "A storage command model used by hosts and storage devices.",
    technical: "Small Computer System Interface defines models and command sets for devices to exchange storage instructions.",
    minecraft: "Like the standard command language machines use to request reads and writes from storage."
  },
  sas: {
    title: "SAS",
    simple: "Serial Attached SCSI.",
    technical: "SAS is the serial standard of the SCSI bus protocol, supporting full duplex, expanders, and SATA compatibility.",
    minecraft: "Like a fast direct cable system inside your storage wall, connecting controllers to many drive drawers."
  },
  pcie: {
    title: "PCIe",
    simple: "A high-speed serial bus inside systems.",
    technical: "PCI Express is a high-bandwidth serial interconnection standard with point-to-point and full-duplex communication.",
    minecraft: "Like the super-fast internal conveyor line between your controller and high-speed machines."
  },
  nvme: {
    title: "NVMe",
    simple: "A protocol designed for PCIe SSDs.",
    technical: "Non-Volatile Memory Express is optimized for PCIe SSDs, low latency, parallel queues, and high concurrency.",
    minecraft: "Like a storage controller language built specifically for ultra-fast item buffers, not old slow chest paths."
  },
  rdma: {
    title: "RDMA",
    simple: "Remote Direct Memory Access.",
    technical: "RDMA transfers data between endpoint buffers over a network with low latency, high throughput, kernel bypass, offload, and zero copy.",
    minecraft: "Like moving items straight from one machine buffer to another without routing through the whole base control system."
  },
  roce: {
    title: "RoCE",
    simple: "RDMA over Ethernet.",
    technical: "RoCE allows RDMA over Ethernet; RoCEv1 works at link layer, while RoCEv2 works at network layer and supports routing.",
    minecraft: "Like getting direct machine-to-machine buffer transfers over your normal Ethernet-style base network."
  },
  s3: {
    title: "S3",
    simple: "Object storage API using buckets and objects.",
    technical: "S3 provides HTTP/HTTPS REST APIs where assets are stored as objects inside buckets.",
    minecraft: "Like a huge labeled warehouse where each item bundle is an object and each storage room is a bucket."
  },
  hdfs: {
    title: "HDFS",
    simple: "Hadoop Distributed File System.",
    technical: "HDFS stores files across multiple nodes using NameNode metadata and DataNode data storage.",
    minecraft: "Like a giant distributed storage base: one control room tracks where chunks are, and many storage buildings hold the actual data."
  },
  controllerEnclosure: {
    title: "Controller Enclosure",
    simple: "The main enclosure that contains storage controllers and key modules.",
    technical: "A controller enclosure is a modular system subrack containing controllers, BBUs, power modules, management modules, and interface modules.",
    minecraft: "Main storage box: it holds the control brains and the modules that connect hosts, disks, power, and management."
  },
  controller: {
    title: "Controller",
    simple: "The core component that processes storage services.",
    technical: "A controller processes host I/O, implements RAID and cache operations, receives management commands, connects disks, and saves critical data to coffer disks.",
    minecraft: "Control brain: it receives read/write work, uses cache/RAID logic, and talks to disks through back-end ports."
  },
  frontendPort: {
    title: "Front-End Port",
    simple: "The port used to communicate with hosts/application servers.",
    technical: "Front-end ports provide service communication channels between controller enclosures and application servers.",
    minecraft: "Host-facing door: servers use it to reach the storage system."
  },
  backendPort: {
    title: "Back-End Port",
    simple: "The port used to connect controllers to disk enclosures or internal storage paths.",
    technical: "Back-end ports provide data channels between controller enclosures and disk enclosures for reading and writing disks.",
    minecraft: "Disk-facing door: controllers use it to reach disk shelves and internal storage paths."
  },
  bbu: {
    title: "BBU",
    simple: "Backup power that protects cache data during power loss.",
    technical: "A Backup Battery Unit supplies power to controller enclosures when external power fails so cache data can be written safely.",
    minecraft: "Emergency battery: it gives the controller time to save dirty cache data before power disappears."
  },
  cofferDisk: {
    title: "Coffer Disk",
    simple: "A special disk area for critical data such as dirty cache, logs, and system configuration.",
    technical: "Coffer disks store user data, system configuration, logs, and dirty cache data when an unexpected power outage occurs.",
    minecraft: "Emergency safe: if power fails, critical unsaved data gets placed there instead of being lost."
  },
  diskEnclosure: {
    title: "Disk Enclosure",
    simple: "A disk shelf that holds disks and expansion modules.",
    technical: "A disk enclosure includes a system subrack, expansion modules, power modules, and disks.",
    minecraft: "Drive shelf: it mainly holds the actual storage drives and the modules used to connect them."
  },
  expansionModule: {
    title: "Expansion Module",
    simple: "A module that connects disk enclosures to controllers or other disk enclosures.",
    technical: "Expansion modules provide expansion ports such as P0/P1 to connect controller enclosures and disk enclosures.",
    minecraft: "Shelf connector: it links drive shelves into the storage system."
  },
  hdd: {
    title: "HDD",
    simple: "A mechanical disk with rotating platters and moving heads.",
    technical: "Hard disk drives use platters, spindle motors, actuator arms, and read/write heads to store magnetic data.",
    minecraft: "Mechanical storage: slower random access because physical parts must move to the right place."
  },
  ssd: {
    title: "SSD",
    simple: "Flash storage with no mechanical seek time.",
    technical: "Solid-state drives use flash memory and controllers, with pages, blocks, and channels. They provide strong random read/write performance.",
    minecraft: "Fast storage: no moving head, so random access is much faster than mechanical disks."
  },
  scm: {
    title: "SCM",
    simple: "Storage-class memory used for very fast persistent cache acceleration.",
    technical: "Storage-class memory is nonvolatile, slightly slower than memory, but far faster than NAND flash, and can be used by SmartCache.",
    minecraft: "Fast persistent buffer: not normal RAM, not normal SSD, but a very fast layer that survives power loss."
  },
  smartIo: {
    title: "SmartIO",
    simple: "An interface module that can support FC or GE optical modules.",
    technical: "SmartIO interface modules support FC and GE optical modules, but the optical module rate must match the port label.",
    minecraft: "Flexible port: it can serve different network roles, but the module speed/type must match what the port expects."
  },
  scaleUpSystem: {
    title: "Scale-up",
    simple: "Expand vertically by adding disks to an existing storage system.",
    technical: "Scale-up expansion adds storage disks to existing systems. It is simple early, but can hit bottlenecks as scale grows.",
    minecraft: "Make one storage box bigger by adding more drives."
  },
  scaleOutSystem: {
    title: "Scale-out",
    simple: "Expand horizontally by adding controllers or nodes.",
    technical: "Scale-out expansion adds controllers. Cost efficiency can improve as scale increases, but software and management complexity increase.",
    minecraft: "Add more storage brains/boxes that work together instead of only making one box bigger."
  },
  localWrite: {
    title: "Local Write",
    simple: "A write sent to the LUN-owning engine.",
    technical: "In a local write, the host sends data to the owning engine, which writes cache, performs mirror protection, returns success, and later flushes dirty data.",
    minecraft: "The request goes straight to the owner brain, so it can cache/protect the write directly."
  },
  nonLocalWrite: {
    title: "Non-local Write",
    simple: "A write sent to a non-owning engine first.",
    technical: "In a non-local write, the receiving non-owner engine forwards the request to the owning engine, which performs the actual cache and protection workflow.",
    minecraft: "The request reaches the wrong brain first, so it forwards it to the owner brain."
  }
};

const questions = [
  {
    mode: "traditional",
    tag: "RAID purpose",
    q: "What is the main purpose of RAID?",
    a: ["To combine multiple physical disks into one logical disk with better capacity, performance, and/or reliability", "To encrypt all disks automatically", "To replace storage protocols such as iSCSI and FC", "To convert file storage into object storage"],
    correct: 0,
    explain: "RAID combines physical disks into a logical disk. Depending on the RAID level, it can improve read/write performance, usable capacity, and data protection."
  },
  {
    mode: "traditional",
    tag: "RAID 0",
    q: "Which RAID level gives striping but no mirroring or parity?",
    a: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
    correct: 0,
    explain: "RAID 0 is pure striping. Memory rule: RAID 0 has zero protection."
  },
  {
    mode: "traditional",
    tag: "RAID 1",
    q: "RAID 1 is mainly based on which data protection method?",
    a: ["Mirroring", "Distributed parity", "Dedicated parity", "Triple parity"],
    correct: 0,
    explain: "RAID 1 writes the same data to another disk. It maximizes data reliability but uses more capacity."
  },
  {
    mode: "traditional",
    tag: "Stripe terms",
    q: "What is a stripe?",
    a: ["Strips with the same position or ID across multiple disks", "A standby disk used after failure", "The external disk visible to a host", "A Huawei product management tool"],
    correct: 0,
    explain: "A strip is consecutive sectors on one disk. A stripe is matching-position strips across disks in the same array."
  },
  {
    mode: "traditional",
    tag: "Stripe terms",
    q: "What does stripe width indicate?",
    a: ["The number of disks used in an array for striping", "The number of bytes in a single sector", "The number of failed disks tolerated", "The size of a LUN"],
    correct: 0,
    explain: "Stripe width means how many disks participate in striping. If an array has three member disks, the stripe width is 3."
  },
  {
    mode: "traditional",
    tag: "Parity",
    q: "Which operation is commonly used to calculate RAID parity?",
    a: ["XOR", "DNS lookup", "NAT translation", "HTML parsing"],
    correct: 0,
    explain: "The RAID chapter describes XOR as the common parity calculation operation."
  },
  {
    mode: "traditional",
    tag: "RAID 3",
    q: "What is the key weakness of RAID 3?",
    a: ["The dedicated parity disk can become a bottleneck", "It has no parity", "It cannot read data in stripes", "It requires SSDs only"],
    correct: 0,
    explain: "RAID 3 uses a dedicated parity disk. Heavy parity workload can hurt performance and make that disk a hotspot."
  },
  {
    mode: "traditional",
    tag: "RAID 5",
    q: "What is the key difference between RAID 3 and RAID 5?",
    a: ["RAID 5 distributes parity across disks instead of using one dedicated parity disk", "RAID 5 has no parity", "RAID 5 uses mirroring only", "RAID 5 requires exactly two disks"],
    correct: 0,
    explain: "RAID 5 improves on RAID 3 by distributing parity among member disks."
  },
  {
    mode: "traditional",
    tag: "Failure tolerance",
    q: "How many disk failures can RAID 5 normally tolerate?",
    a: ["One", "Two", "Three", "Zero"],
    correct: 0,
    explain: "RAID 5 tolerates one disk failure. If another disk fails before reconstruction finishes, data is lost."
  },
  {
    mode: "traditional",
    tag: "Failure tolerance",
    q: "How many disk failures can RAID 6 tolerate?",
    a: ["Two", "One", "Three", "Zero"],
    correct: 0,
    explain: "RAID 6 uses double parity and tolerates up to two failed disks."
  },
  {
    mode: "traditional",
    tag: "RAID 6",
    q: "Why is RAID 6 useful with large-capacity disks?",
    a: ["Large disks take longer to reconstruct, so dual redundancy reduces risk during rebuild", "Large disks cannot use RAID 5 at all", "RAID 6 removes the need for backups", "RAID 6 is always the fastest write option"],
    correct: 0,
    explain: "Large disks can take a long time to reconstruct. RAID 6 can survive another disk failure during that risky window."
  },
  {
    mode: "traditional",
    tag: "RAID 6",
    q: "Which statement about RAID 6 write performance is most accurate?",
    a: ["It can have poor/slower writes because double parity must be calculated", "It writes fastest because it has no redundancy", "It writes only to one disk", "It never calculates parity"],
    correct: 0,
    explain: "RAID 6 performs double parity calculation, so writes are usually slower than simpler RAID levels."
  },
  {
    mode: "traditional",
    tag: "RAID 10",
    q: "What is RAID 10?",
    a: ["RAID 1 mirrors first, then RAID 0 stripes across mirror groups", "RAID 0 only", "RAID 5 with two parity disks", "RAID 6 with three parity disks"],
    correct: 0,
    explain: "RAID 10 is nested RAID 1 + RAID 0. The chapter says RAID 0 is implemented after RAID 1."
  },
  {
    mode: "traditional",
    tag: "RAID 10",
    q: "Why is RAID 10 recommended when reliability and random write performance matter?",
    a: ["It combines mirroring with striping and avoids parity write penalty", "It uses a dedicated parity disk", "It stores only one copy of data", "It uses object storage metadata"],
    correct: 0,
    explain: "RAID 10 uses mirrors for protection and striping for speed. It does not need parity calculations for writes."
  },
  {
    mode: "traditional",
    tag: "RAID 10",
    q: "Which RAID 10 failure scenario can cause data loss?",
    a: ["Two disks fail in the same mirror pair", "One disk fails in one mirror pair", "Two disks fail in different mirror pairs", "A read request happens during normal operation"],
    correct: 0,
    explain: "RAID 10 can tolerate multiple failures only if the surviving mirror copy still exists. Losing both disks in the same mirror pair loses that data."
  },
  {
    mode: "traditional",
    tag: "RAID 50",
    q: "What is RAID 50?",
    a: ["RAID 5 sub-arrays striped together with RAID 0", "RAID 1 mirrors striped with RAID 0", "RAID 6 with triple parity", "A single dedicated parity disk only"],
    correct: 0,
    explain: "RAID 50 is nested RAID 5 + RAID 0. It requires at least two RAID 5 groups."
  },
  {
    mode: "traditional",
    tag: "RAID 50",
    q: "What failure pattern can break RAID 50?",
    a: ["Two disks fail in the same RAID 5 sub-array", "One disk fails in each RAID 5 sub-array", "One disk fails total", "No parity disk is present"],
    correct: 0,
    explain: "Each RAID 5 sub-array can tolerate one disk failure. Two failures in the same sub-array cause data loss."
  },
  {
    mode: "traditional",
    tag: "JBOD",
    q: "How is JBOD different from RAID 0?",
    a: ["JBOD fills disks one after another, while RAID 0 stripes data across disks for parallelism", "JBOD uses double parity", "JBOD mirrors all data", "JBOD requires FC SAN"],
    correct: 0,
    explain: "JBOD can combine capacity, but it does not stripe data concurrently like RAID 0."
  },
  {
    mode: "traditional",
    tag: "Performance",
    q: "Which RAID level generally provides best performance but no protection?",
    a: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
    correct: 0,
    explain: "RAID 0 stripes data across disks and gives high performance, but any disk failure can cause data loss."
  },
  {
    mode: "traditional",
    tag: "Capacity",
    q: "A two-disk RAID 1 array usually has what space utilization?",
    a: ["50%", "100%", "67%", "25%"],
    correct: 0,
    explain: "RAID 1 stores a mirror copy. With two equal disks, only one disk worth of usable data is available."
  },
  {
    mode: "raid2",
    tag: "RAID evolution",
    q: "Why did storage systems evolve beyond traditional RAID?",
    a: ["Large disks made reconstruction slower and increased data loss risk during rebuild", "Traditional RAID cannot use any parity", "Traditional RAID only supports object storage", "Traditional RAID cannot combine disks"],
    correct: 0,
    explain: "The chapter says larger disk capacity means longer reconstruction time, more risk, and more service impact."
  },
  {
    mode: "raid2",
    tag: "RAID 2.0+",
    q: "What is the big reconstruction advantage of RAID 2.0+?",
    a: ["Many-to-many reconstruction across all disks in a resource pool", "One failed disk always reconstructs to one hot spare disk only", "No reconstruction is needed after failure", "Only the host CPU reconstructs data"],
    correct: 0,
    explain: "Traditional RAID is many-to-one. RAID 2.0+ reconstructs valid data from the failed disk to many functioning disks, reducing impact."
  },
  {
    mode: "raid2",
    tag: "RAID 2.0+",
    q: "In RAID 2.0+, what is a CK?",
    a: ["A chunk: fixed disk space allocated from a storage pool", "A host login account", "A protocol like iSCSI", "A backup software license"],
    correct: 0,
    explain: "A chunk, or CK, is a basic disk-space unit used by RAID 2.0+."
  },
  {
    mode: "raid2",
    tag: "RAID 2.0+",
    q: "What is a CKG?",
    a: ["A chunk group made of chunks from different disks according to a RAID algorithm", "A physical disk serial number", "A Windows file share", "A management GUI"],
    correct: 0,
    explain: "CKGs have RAID attributes and are formed from chunks on different disks."
  },
  {
    mode: "raid2",
    tag: "Disk domain",
    q: "What is a disk domain in Huawei RAID 2.0+?",
    a: ["A group of disks that provides resources for storage pools and reserves hot spare capacity", "A network DNS domain for storage", "A single LUN mapped to a host", "A RAID 0 stripe only"],
    correct: 0,
    explain: "A disk domain combines disks and provides storage resources for pools, with hot spare capacity reserved."
  },
  {
    mode: "raid2",
    tag: "Storage pool",
    q: "What is a storage pool?",
    a: ["A storage resource container from which application servers use storage", "A protocol for NAS", "A dedicated parity disk", "A type of Ethernet switch"],
    correct: 0,
    explain: "The chapter defines a storage pool as the resource container used by application servers."
  },
  {
    mode: "raid2",
    tag: "Storage tier",
    q: "Which disk type belongs to the high-performance tier in the chapter?",
    a: ["SSD", "SAS", "NL-SAS", "Tape"],
    correct: 0,
    explain: "Tier 0 high-performance tier uses SSD. SAS is performance tier, NL-SAS is capacity tier."
  },
  {
    mode: "raid2",
    tag: "Storage tier",
    q: "Which disk type belongs to the capacity tier?",
    a: ["NL-SAS", "SSD", "DRAM", "NVMe protocol only"],
    correct: 0,
    explain: "The chapter places NL-SAS in Tier 2 capacity tier for mass, infrequently accessed data."
  },
  {
    mode: "raid2",
    tag: "Disk group",
    q: "What is a disk group (DG)?",
    a: ["A set of disks of the same type inside a disk domain", "A host-visible volume", "A parity formula", "A network VLAN"],
    correct: 0,
    explain: "DGs are automatically configured internal objects used for grouping same-type disks and fault isolation."
  },
  {
    mode: "raid2",
    tag: "Extent",
    q: "What is an extent used for?",
    a: ["Migration, hot-data statistics, space application, and release in a storage pool", "Encrypting all host traffic", "Replacing a storage protocol", "Making RAID 0 redundant"],
    correct: 0,
    explain: "Extents are smaller logical spaces carved from CKGs and are important for migration and space management."
  },
  {
    mode: "raid2",
    tag: "Grain",
    q: "Which LUN type uses grains?",
    a: ["Thin LUN", "Thick LUN", "RAID 0 LUN only", "No LUN type"],
    correct: 0,
    explain: "The chapter says grains are mapped to thin LUNs. Thick LUNs do not involve grains."
  },
  {
    mode: "raid2",
    tag: "LUN",
    q: "What is a LUN?",
    a: ["A storage unit directly mapped to a host for reads and writes", "A physical SSD only", "A parity disk", "A protocol for file shares"],
    correct: 0,
    explain: "A LUN is the external embodiment of a volume and can be mapped to servers."
  },
  {
    mode: "raid2",
    tag: "RAID policy",
    q: "In OceanStor storage pools, RAID policies are associated with what?",
    a: ["Storage tiers", "DNS records", "Only host operating systems", "Browser sessions"],
    correct: 0,
    explain: "Storage pools can specify storage tiers and related RAID policy/capacity."
  },
  {
    mode: "raid2",
    tag: "Hot spare",
    q: "How does RAID 2.0+ treat hot spare compared with traditional RAID?",
    a: ["It can reserve shared hot spare space instead of requiring a specific hot spare disk", "It never uses hot spare capacity", "It only uses tape as a spare", "It requires each host to provide a spare disk"],
    correct: 0,
    explain: "In RAID 2.0+, hot spare capacity can be reserved in the disk domain and shared among storage tiers."
  },
  {
    mode: "huawei",
    tag: "Dynamic RAID",
    q: "What is Huawei Dynamic RAID mainly designed to improve?",
    a: ["Flash memory space utilization and efficient recovery around failed blocks", "NAS file permissions", "Manual tape backup", "WAN routing"],
    correct: 0,
    explain: "Dynamic RAID handles faulty flash blocks by reconstructing using remaining blocks, improving flash space utilization."
  },
  {
    mode: "huawei",
    tag: "Dynamic RAID",
    q: "Which algorithm family does Dynamic RAID use according to the chapter?",
    a: ["Erasure coding (EC)", "Spanning Tree Protocol", "AES encryption only", "DNS hashing"],
    correct: 0,
    explain: "The chapter states Dynamic RAID adopts the erasure coding algorithm."
  },
  {
    mode: "huawei",
    tag: "RAID-TP",
    q: "How many simultaneous disk failures can RAID-TP tolerate?",
    a: ["Three", "Two", "One", "Zero"],
    correct: 0,
    explain: "RAID-TP is Huawei's triple-protection RAID approach and tolerates simultaneous failure of three disks."
  },
  {
    mode: "huawei",
    tag: "RAID-TP",
    q: "Which Huawei algorithm is associated with RAID-TP?",
    a: ["FlexEC", "XFS", "BGP", "SMB"],
    correct: 0,
    explain: "The chapter says RAID-TP uses Huawei's optimized FlexEC algorithm."
  },
  {
    mode: "huawei",
    tag: "RAID-TP",
    q: "Why does RAID-TP matter in the era of large-capacity disks?",
    a: ["It improves reliability and reduces reconstruction impact when capacity and rebuild windows grow", "It removes all need for storage pools", "It makes every disk a NAS file share", "It prevents the use of SSDs"],
    correct: 0,
    explain: "Large disks increase reconstruction time and risk. RAID-TP is designed for high reliability, performance, and capacity utilization."
  },
  {
    mode: "traditional",
    tag: "Concept check",
    q: "Which pair best matches the terms?",
    a: ["Mirroring = copies, parity = calculated recovery data", "Mirroring = no redundancy, parity = protocol", "Mirroring = network switching, parity = compression", "Mirroring = object storage, parity = file sharing"],
    correct: 0,
    explain: "Mirroring duplicates data. Parity calculates extra data that helps reconstruct missing data."
  },
  {
    mode: "traditional",
    tag: "Concept check",
    q: "Which RAID level is least appropriate for important enterprise data because one disk failure can lose data?",
    a: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
    correct: 0,
    explain: "RAID 0 has no redundancy. It is performance-focused, not reliability-focused."
  },
  {
    mode: "traditional",
    tag: "Concept check",
    q: "Which RAID level uses double distributed parity?",
    a: ["RAID 6", "RAID 5", "RAID 1", "RAID 0"],
    correct: 0,
    explain: "RAID 6 is distributed double-parity RAID."
  },
  {
    mode: "traditional",
    tag: "Concept check",
    q: "A write penalty is most associated with which protection approach?",
    a: ["Parity RAID", "Pure mirroring only", "No redundancy", "JBOD sequential fill"],
    correct: 0,
    explain: "Parity RAID needs parity recalculation on writes, especially small writes."
  },
  {
    mode: "raid2",
    tag: "Concept check",
    q: "Which reconstruction pattern belongs to traditional RAID?",
    a: ["Many-to-one reconstruction", "Many-to-many reconstruction", "No reconstruction", "Host-to-host reconstruction"],
    correct: 0,
    explain: "Traditional RAID commonly reconstructs from many disks to one spare disk. RAID 2.0+ improves this with many-to-many reconstruction."
  },
  {
    mode: "raid2",
    tag: "Concept check",
    q: "Which reconstruction pattern belongs to RAID 2.0+?",
    a: ["Many-to-many reconstruction", "Many-to-one reconstruction only", "One-to-one mirror copy only", "Client-side reconstruction"],
    correct: 0,
    explain: "RAID 2.0+ spreads reconstruction work among all functioning disks in the resource pool."
  },
  {
    mode: "raid2",
    tag: "Concept check",
    q: "Which object is visible externally to a host?",
    a: ["LUN", "CKG", "CK", "DG"],
    correct: 0,
    explain: "CK, CKG, and DG are internal storage objects. A LUN is mapped to a host."
  },
  {
    mode: "raid2",
    tag: "Concept check",
    q: "Which object is the minimum unit for allocating resources from a disk domain to a storage pool?",
    a: ["CKG", "LUN", "Host", "Protocol"],
    correct: 0,
    explain: "The chapter defines CKG as the minimum unit for allocating resources from disk domain to storage pool."
  },
  {
    mode: "traditional",
    tag: "Exam trap",
    q: "True or false: RAID 0 provides data redundancy.",
    a: ["False", "True"],
    correct: 0,
    explain: "False. RAID 0 is striping only. It provides performance but no redundancy."
  },
  {
    mode: "traditional",
    tag: "Exam trap",
    q: "True or false: RAID 5 can keep data accessible after one disk fails.",
    a: ["True", "False"],
    correct: 0,
    explain: "True. RAID 5 tolerates one disk failure. During degraded mode, another disk failure causes data loss."
  },
  {
    mode: "traditional",
    tag: "Exam trap",
    q: "True or false: RAID 6 uses two independent parity protections.",
    a: ["True", "False"],
    correct: 0,
    explain: "True. The chapter explains RAID 6 P+Q and RAID 6 DP as double-parity approaches."
  },
  {
    mode: "huawei",
    tag: "Exam trap",
    q: "True or false: RAID-TP tolerates three simultaneous disk failures.",
    a: ["True", "False"],
    correct: 0,
    explain: "True. RAID-TP is specifically described as tolerating simultaneous failure of three disks."
  }
];

const networkQuestions = [
  {
    mode: "das",
    tag: "DAS",
    q: "What does DAS mean?",
    a: ["Storage devices are directly connected to hosts", "Storage is accessed as files over NFS/CIFS", "Storage is always object-based", "Storage is provided only through cloud APIs"],
    correct: 0,
    explain: "Direct-attached storage connects one or more storage devices directly to servers and provides block-level access."
  },
  {
    mode: "das",
    tag: "DAS",
    q: "Which access type does DAS provide to servers?",
    a: ["Block-level data access", "File-level sharing only", "Object-level access only", "Web browser access only"],
    correct: 0,
    explain: "The chapter states that DAS storage devices provide block-level data access for servers."
  },
  {
    mode: "das",
    tag: "DAS challenges",
    q: "Which is a major challenge of DAS?",
    a: ["Poor scalability and difficult resource sharing", "It cannot connect to any server", "It always requires NFS", "It only works with cloud storage"],
    correct: 0,
    explain: "DAS has limited ports, limited addressable disks, limited distance, inconvenient maintenance, and poor resource sharing."
  },
  {
    mode: "das",
    tag: "JBOD",
    q: "What is true about JBOD in the DAS section?",
    a: ["It increases capacity but does not provide data protection", "It always provides RAID 6 protection", "It is a NAS file protocol", "It is a Fibre Channel switch"],
    correct: 0,
    explain: "JBOD connects disks to increase capacity, but it offers no redundancy and has poor reliability."
  },
  {
    mode: "nas",
    tag: "NAS",
    q: "What does NAS mainly provide?",
    a: ["File-level data access and sharing over a network", "Raw block access only", "A dedicated Fibre Channel fabric only", "CPU virtualization only"],
    correct: 0,
    explain: "NAS connects storage devices to the live network and provides data and file services."
  },
  {
    mode: "nas",
    tag: "NAS protocols",
    q: "Which protocols are most commonly used for NAS file sharing?",
    a: ["NFS and CIFS", "FC and FCoE", "SAS and SATA", "NVMe and PCIe"],
    correct: 0,
    explain: "The chapter says the most commonly used network sharing protocols for NAS are CIFS and NFS."
  },
  {
    mode: "nas",
    tag: "NFS",
    q: "NFS is traditionally associated with which environment?",
    a: ["UNIX/Linux", "Microsoft Windows only", "Fibre Channel switches only", "Tape libraries only"],
    correct: 0,
    explain: "NFS is a traditional file sharing protocol in UNIX environments."
  },
  {
    mode: "nas",
    tag: "CIFS",
    q: "CIFS is traditionally associated with which environment?",
    a: ["Microsoft Windows", "UNIX only", "FC SAN only", "Object storage only"],
    correct: 0,
    explain: "CIFS is a file sharing protocol in the traditional Microsoft environment and is based on SMB."
  },
  {
    mode: "nas",
    tag: "NFS vs CIFS",
    q: "Which statement is correct?",
    a: ["NFS is stateless, while CIFS is stateful", "NFS is stateful, while CIFS is stateless", "Both are Fibre Channel protocols", "Both are block protocols only"],
    correct: 0,
    explain: "The chapter says NFS is stateless and CIFS is stateful."
  },
  {
    mode: "nas",
    tag: "NDMP",
    q: "What does NDMP help NAS do?",
    a: ["Write data directly to tapes without being backed up by backup servers", "Convert RAID 5 to RAID 6", "Replace IP addresses with Fibre Channel names", "Create VLAN IDs"],
    correct: 0,
    explain: "NDMP improves NAS data protection efficiency by enabling data to be directly written to tapes."
  },
  {
    mode: "san",
    tag: "SAN",
    q: "What does SAN stand for?",
    a: ["Storage Area Network", "Server Access Node", "Shared Application Namespace", "Storage Authentication Number"],
    correct: 0,
    explain: "SAN means Storage Area Network."
  },
  {
    mode: "san",
    tag: "SAN protocols",
    q: "Which protocols are commonly used in SAN networking?",
    a: ["FC and iSCSI", "NFS and CIFS", "HTTP and FTP", "DNS and DHCP"],
    correct: 0,
    explain: "The chapter quiz answer says SAN commonly uses FC and iSCSI."
  },
  {
    mode: "san",
    tag: "SAN object",
    q: "What does SAN usually transport?",
    a: ["Data blocks", "Files only", "HTML documents only", "Email messages only"],
    correct: 0,
    explain: "The comparison table lists SAN transport object as data block."
  },
  {
    mode: "san",
    tag: "IP SAN",
    q: "What protocol is IP SAN mainly associated with in this chapter?",
    a: ["iSCSI", "CIFS", "NFS", "HTTP"],
    correct: 0,
    explain: "IP SAN uses iSCSI over IP networks."
  },
  {
    mode: "san",
    tag: "FC SAN",
    q: "What hardware does an FC SAN host typically use?",
    a: ["FC HBA", "Only a Wi-Fi adapter", "A NAS engine only", "A tape drive"],
    correct: 0,
    explain: "The FC SAN section shows an FC HBA converting SCSI packets into Fibre Channel packets."
  },
  {
    mode: "san",
    tag: "iSCSI modes",
    q: "Which iSCSI access mode has the best performance but highest cost?",
    a: ["iSCSI HBA", "NIC + initiator software", "FTP client", "HTTP browser"],
    correct: 0,
    explain: "The iSCSI HBA handles iSCSI and TCP/IP functions with the least CPU use, but costs the most."
  },
  {
    mode: "san",
    tag: "iSCSI modes",
    q: "Which IP SAN mode is most cost-effective but consumes more host resources?",
    a: ["NIC + initiator software", "iSCSI HBA", "FC HBA", "NAS clustering"],
    correct: 0,
    explain: "NIC + initiator software uses standard NICs and switches, but host resources are used for packet conversion."
  },
  {
    mode: "san",
    tag: "TOE NIC",
    q: "What does TOE NIC offload?",
    a: ["TCP/IP protocol layer processing", "All file permissions", "Fibre Channel zoning", "RAID parity calculations"],
    correct: 0,
    explain: "The TOE NIC handles TCP/IP conversion, reducing host overhead compared with pure software."
  },
  {
    mode: "san",
    tag: "IQN",
    q: "What identifies iSCSI initiators and targets?",
    a: ["IQN", "VLAN ID only", "CIFS share name", "KVM ID"],
    correct: 0,
    explain: "iSCSI uses iSCSI Qualified Name (IQN) to identify initiators and targets."
  },
  {
    mode: "san",
    tag: "Logical port",
    q: "What is a logical port?",
    a: ["A virtual port that carries host services and has a unique IP address", "A physical disk", "A RAID 5 parity block", "A file sharing protocol"],
    correct: 0,
    explain: "Logical ports are created based on Ethernet, bond, or VLAN ports and carry host services."
  },
  {
    mode: "san",
    tag: "VLAN",
    q: "What does a VLAN do?",
    a: ["Logically divides a physical LAN into multiple broadcast domains", "Mirrors disks", "Creates RAID parity", "Converts NAS to DAS"],
    correct: 0,
    explain: "A VLAN logically divides a physical LAN into independent broadcast domains."
  },
  {
    mode: "san",
    tag: "IP failover",
    q: "What is IP address failover?",
    a: ["A logical IP address switches from a faulty port to an available port", "A disk is converted into a file", "A RAID group becomes JBOD", "A CIFS share becomes NFS"],
    correct: 0,
    explain: "IP address failover switches services from a faulty port to an available port to preserve continuity."
  },
  {
    mode: "san",
    tag: "Zoning",
    q: "What is an FC zone?",
    a: ["A set of ports or devices that can communicate with each other", "A RAID stripe", "A NAS file share", "A backup tape"],
    correct: 0,
    explain: "A zone is a set of ports or devices that can communicate. Members can access other members in the same zone."
  },
  {
    mode: "san",
    tag: "IP SAN vs FC SAN",
    q: "Which statement best describes IP SAN compared with FC SAN?",
    a: ["IP SAN is generally lower cost and easier to manage, while FC SAN is higher security/performance but costlier", "IP SAN always uses CIFS", "FC SAN requires no special hardware", "FC SAN is only for file-level sharing"],
    correct: 0,
    explain: "The comparison table lists IP SAN as lower cost/easier management and FC SAN as dedicated, costlier, and relatively more secure."
  },
  {
    mode: "compare",
    tag: "DAS/NAS/SAN",
    q: "Which architecture provides file sharing using standard file sharing protocols?",
    a: ["NAS", "DAS", "SAN", "JBOD"],
    correct: 0,
    explain: "The comparison table says NAS uses standard file sharing protocols such as NFS/CIFS."
  },
  {
    mode: "compare",
    tag: "DAS/NAS/SAN",
    q: "Which architectures transport data blocks?",
    a: ["DAS and SAN", "NAS only", "NAS and FTP only", "HTTP and NDMP"],
    correct: 0,
    explain: "The chapter comparison table lists DAS and SAN transport objects as data blocks, while NAS transports files."
  },
  {
    mode: "compare",
    tag: "DAS/NAS/SAN",
    q: "Which architecture is most suitable for large enterprises and data centers?",
    a: ["SAN", "DAS", "Local laptop disk only", "FTP only"],
    correct: 0,
    explain: "The comparison table places SAN in large enterprises and data centers."
  },
  {
    mode: "compare",
    tag: "DAS/NAS/SAN",
    q: "Which architecture generally has low capacity expansion capability?",
    a: ["DAS", "SAN", "NAS", "Scale-out storage"],
    correct: 0,
    explain: "The comparison table lists DAS capacity expansion capability as low."
  },
  {
    mode: "distributed",
    tag: "Scale-out",
    q: "What is scale-out storage?",
    a: ["A system that organizes local HDDs/SSDs of general-purpose servers into large storage pools", "A single disk directly attached to one host", "A Windows file sharing protocol", "A Fibre Channel zone"],
    correct: 0,
    explain: "Scale-out storage organizes local disks of general-purpose servers into large storage resource pools and distributes data across nodes."
  },
  {
    mode: "distributed",
    tag: "Scale-out networks",
    q: "Which networks are included in scale-out storage networking?",
    a: ["Management network, front-end service network, and back-end storage network", "Only a keyboard network", "Only FTP and HTTP", "Only a single SCSI cable"],
    correct: 0,
    explain: "The chapter quiz answer includes management network, front-end service network, and back-end storage network."
  },
  {
    mode: "distributed",
    tag: "Front-end network",
    q: "What is the front-end service/tenant network used for?",
    a: ["Connecting scale-out storage with customer networks and processing service requests", "Only internal heartbeat traffic", "Only hardware temperature monitoring", "Only RAID parity calculation"],
    correct: 0,
    explain: "The front-end service network connects to customer networks, tenant UI, clients, and APIs."
  },
  {
    mode: "distributed",
    tag: "Back-end network",
    q: "What is the back-end storage/internal management network used for?",
    a: ["Internal node communication, heartbeat, and data interaction", "User file sharing through CIFS only", "Replacing all VLANs", "Browser rendering"],
    correct: 0,
    explain: "The back-end network provides heartbeat and internal communication/data interaction between components."
  },
  {
    mode: "distributed",
    tag: "Management network",
    q: "What is the management network used for?",
    a: ["Administrator management UI, configuration, tenant/resource management, alarms, performance, and topology", "Only SCSI block transfer", "Only parity calculation", "Only file download"],
    correct: 0,
    explain: "The management network connects with the customer's maintenance network for system administration and maintenance."
  },
  {
    mode: "distributed",
    tag: "Network planes",
    q: "Which plane connects customer applications to storage through standard protocols such as iSCSI and HDFS?",
    a: ["Service plane", "BMC plane", "Arbitration plane", "Management plane only"],
    correct: 0,
    explain: "The service plane interconnects with customer applications and accesses storage through standard protocols such as iSCSI and HDFS."
  },
  {
    mode: "distributed",
    tag: "OSD",
    q: "What does OSD do in Huawei scale-out storage?",
    a: ["Stores user data of distributed clusters", "Authenticates CIFS users only", "Creates VLAN IDs", "Routes FC fabrics"],
    correct: 0,
    explain: "Object Storage Device (OSD) is a Huawei scale-out component that stores user data of distributed clusters."
  }
];

const protocolQuestions = [
  {
    mode: "sanproto",
    tag: "Protocol basics",
    q: "What is a protocol?",
    a: ["A set of conventions that computers follow to communicate", "A physical disk only", "A RAID spare disk", "A storage cabinet layout"],
    correct: 0,
    explain: "The chapter defines a protocol as conventions that computers comply with to communicate, including language, media, transport, and interface technology."
  },
  {
    mode: "sanproto",
    tag: "SCSI",
    q: "What does SCSI define?",
    a: ["A model and command set for devices to exchange information", "A file sharing protocol for Windows only", "A cloud object bucket", "A web browser transfer method"],
    correct: 0,
    explain: "SCSI defines a model and necessary command set for devices to exchange information."
  },
  {
    mode: "sanproto",
    tag: "SCSI",
    q: "In SCSI, what is the initiator usually?",
    a: ["The host that sends requests", "The disk array that responds", "The VLAN ID", "The object bucket"],
    correct: 0,
    explain: "A SCSI initiator sends request instructions to a SCSI target. Generally, the host acts as the initiator."
  },
  {
    mode: "sanproto",
    tag: "SCSI",
    q: "In SCSI, what is the target usually?",
    a: ["The device that receives and processes SCSI instructions", "The client browser", "The file system root directory", "The CIFS domain controller"],
    correct: 0,
    explain: "A target processes SCSI instructions. A disk array can function as a SCSI target."
  },
  {
    mode: "sanproto",
    tag: "SCSI LUN",
    q: "What is a LUN in the SCSI chapter?",
    a: ["A namespace resource described by a SCSI target", "A VLAN broadcast domain", "A REST bucket", "An FTP control port"],
    correct: 0,
    explain: "A LUN is a namespace resource described by a SCSI target. A target can include multiple LUNs."
  },
  {
    mode: "sanproto",
    tag: "SCSI addressing",
    q: "Which three values identify a SCSI target?",
    a: ["Bus ID, target device ID, and LUN ID", "Bucket, object, and account", "NFS, CIFS, and FTP", "Port 20, port 21, and port 443"],
    correct: 0,
    explain: "The chapter says a ternary description of bus ID, target device ID, and LUN ID identifies a SCSI target."
  },
  {
    mode: "sanproto",
    tag: "SAS",
    q: "What is SAS?",
    a: ["Serial Attached SCSI", "Simple Archive Service", "Storage Area Switch", "Shared Access SMB"],
    correct: 0,
    explain: "SAS is Serial Attached SCSI, the serial standard of the SCSI bus protocol."
  },
  {
    mode: "sanproto",
    tag: "SAS",
    q: "Which statement about SAS is correct?",
    a: ["It uses serial technology, supports full duplex, and is compatible with SATA disks", "It is only a Windows file sharing protocol", "It is an HTTP REST API", "It cannot use expanders"],
    correct: 0,
    explain: "SAS uses serial technology, supports full-duplex communication, can use expanders, and is compatible with SATA disks."
  },
  {
    mode: "sanproto",
    tag: "SAS",
    q: "Why do SAS expanders matter?",
    a: ["They allow more devices to be connected in a SAS domain", "They convert CIFS to NFS", "They create object buckets", "They replace all RAID protection"],
    correct: 0,
    explain: "SAS expanders work like interconnection devices, allowing more devices to be connected in a SAS domain."
  },
  {
    mode: "sanproto",
    tag: "SAS",
    q: "What is a SAS wide port?",
    a: ["Multiple narrow ports bundled to provide higher bandwidth", "A REST API endpoint", "A CIFS authentication mode", "A tape backup policy"],
    correct: 0,
    explain: "The chapter says four narrow SAS ports can be bound as a wide link port for higher throughput."
  },
  {
    mode: "sanproto",
    tag: "iSCSI",
    q: "What does iSCSI carry over TCP/IP?",
    a: ["SCSI commands and block data", "Only web pages", "Only Windows usernames", "Only object metadata"],
    correct: 0,
    explain: "iSCSI encapsulates SCSI commands and block data into TCP packets for transmission over IP networks."
  },
  {
    mode: "sanproto",
    tag: "iSCSI",
    q: "What kind of storage access does iSCSI provide?",
    a: ["Block-level access", "File-level access only", "Object-only access", "Directory authentication only"],
    correct: 0,
    explain: "iSCSI provides block-level access to storage devices by carrying SCSI commands over TCP/IP."
  },
  {
    mode: "sanproto",
    tag: "iSCSI",
    q: "In iSCSI, what sends I/O requests?",
    a: ["Initiator", "Target", "Bucket", "NameNode"],
    correct: 0,
    explain: "The iSCSI initiator sends I/O requests, while the target responds and executes I/O operations."
  },
  {
    mode: "sanproto",
    tag: "iSCSI",
    q: "Which iSCSI initiator type has the best performance?",
    a: ["iSCSI HBA", "Software initiator", "TOE NIC + software initiator", "FTP client"],
    correct: 0,
    explain: "The chapter states performance increases from software initiator, to TOE NIC, to iSCSI HBA."
  },
  {
    mode: "sanproto",
    tag: "FC",
    q: "What is FC used for in storage?",
    a: ["High-performance front-end host access in storage networks", "Windows file sharing", "HTTP object APIs only", "LDAP authentication only"],
    correct: 0,
    explain: "Fibre Channel delivers high performance for front-end host access on point-to-point and switch-based networks."
  },
  {
    mode: "sanproto",
    tag: "FC topology",
    q: "Which FC topology is described as the most widely used?",
    a: ["Fabric switching network", "Point-to-point only", "FC-AL only", "HTTP REST"],
    correct: 0,
    explain: "The FC topology slide marks the switching/fabric network as the most widely used technology."
  },
  {
    mode: "sanproto",
    tag: "FC topology",
    q: "Which FC topology allows only two devices to be connected?",
    a: ["Point-to-point", "Fabric switching network", "FC-AL", "S3 object service"],
    correct: 0,
    explain: "Point-to-point is the simplest FC topology and connects two nodes directly."
  },
  {
    mode: "sanproto",
    tag: "FC ports",
    q: "Which FC port type connects switches?",
    a: ["E_Port", "N_Port", "F_Port", "LUN_Port"],
    correct: 0,
    explain: "E_Port is an expansion port used to connect FC switches."
  },
  {
    mode: "sanproto",
    tag: "FC ports",
    q: "Which FC port type is a node port?",
    a: ["N_Port", "E_Port", "G_Port only", "VLAN_Port"],
    correct: 0,
    explain: "N_Port means node port. It is a port on a fabric device/node."
  },
  {
    mode: "sanproto",
    tag: "FC HBA",
    q: "What does an FC HBA do?",
    a: ["Connects a server to an FC array", "Creates S3 buckets", "Authenticates CIFS users", "Runs the NameNode"],
    correct: 0,
    explain: "The chapter states an FC HBA is used to connect a server to an FC array."
  },
  {
    mode: "pcie",
    tag: "PCIe",
    q: "What is PCIe?",
    a: ["A high-performance, high-bandwidth serial interconnection standard", "A NAS file protocol", "A RAID level", "A CIFS authentication method"],
    correct: 0,
    explain: "PCIe is PCI Express, a high-performance and high-bandwidth serial communication interconnection standard."
  },
  {
    mode: "pcie",
    tag: "PCIe",
    q: "Which feature belongs to PCIe?",
    a: ["Point-to-point, full-duplex, high bandwidth communication", "File sharing over SMB only", "Object buckets", "FTP port 21 control only"],
    correct: 0,
    explain: "PCIe features include point-to-point connection, high reliability, tree networking, full duplex, and frame-based transmission."
  },
  {
    mode: "pcie",
    tag: "NVMe",
    q: "What is NVMe designed for?",
    a: ["PCIe SSDs", "Tape backup only", "Windows shared folders", "Object bucket metadata only"],
    correct: 0,
    explain: "NVMe is a standard interface protocol customized for PCIe SSDs."
  },
  {
    mode: "pcie",
    tag: "NVMe",
    q: "Why does NVMe reduce latency compared with SAS-based paths?",
    a: ["It uses a shorter PCIe/NVMe path and fewer protocol interactions", "It uses only FTP", "It converts block data to files", "It disables all queues"],
    correct: 0,
    explain: "The chapter explains that NVMe shortens the transmission path and reduces write protocol interactions from four to two."
  },
  {
    mode: "pcie",
    tag: "NVMe",
    q: "Which NVMe feature improves concurrency?",
    a: ["Multi-queue data transmission", "Single fixed queue only", "CIFS stateful sessions", "FTP active mode"],
    correct: 0,
    explain: "NVMe supports multi-queue data transmission with high concurrency and low latency."
  },
  {
    mode: "pcie",
    tag: "NVMe-oF",
    q: "What does NVMe over Fabrics allow?",
    a: ["Accessing remote NVMe devices as if they were local NVMe devices", "Using NFS as a RAID parity method", "Converting all storage into FTP", "Removing all network hardware"],
    correct: 0,
    explain: "NVMe-oF extends NVMe to Ethernet and Fibre Channel, allowing remote NVMe access like local NVMe."
  },
  {
    mode: "rdma",
    tag: "RDMA",
    q: "What does RDMA stand for?",
    a: ["Remote Direct Memory Access", "Redundant Disk Management Algorithm", "Rapid Directory Mapping Access", "Remote Domain Management API"],
    correct: 0,
    explain: "RDMA is Remote Direct Memory Access."
  },
  {
    mode: "rdma",
    tag: "RDMA",
    q: "What are the main benefits of RDMA?",
    a: ["Low latency, high throughput, and low CPU/OS resource use", "Higher file permission complexity only", "More RAID parity disks", "Only better FTP downloads"],
    correct: 0,
    explain: "RDMA provides low latency, high throughput, and low CPU/OS resource occupancy through kernel bypass, offload, and zero copy."
  },
  {
    mode: "rdma",
    tag: "RoCE",
    q: "What is RoCE?",
    a: ["RDMA over Ethernet", "RAID over CIFS", "REST over FC", "Remote object copy encryption"],
    correct: 0,
    explain: "RoCE is a network protocol that allows RDMA over Ethernet."
  },
  {
    mode: "rdma",
    tag: "RoCE",
    q: "Which RoCE version can implement routing functions?",
    a: ["RoCEv2", "RoCEv1", "NFSv3", "SMB1"],
    correct: 0,
    explain: "The chapter states RoCEv1 is a link-layer protocol and RoCEv2 is a network-layer protocol that can implement routing."
  },
  {
    mode: "nasproto",
    tag: "File system",
    q: "What does a file system organize data into?",
    a: ["Files and directories in a tree structure", "Only raw SCSI blocks", "Only S3 buckets", "Only VLAN IDs"],
    correct: 0,
    explain: "A file system manages and organizes data as files and directories in a tree structure."
  },
  {
    mode: "nasproto",
    tag: "CIFS",
    q: "CIFS is based on which protocol?",
    a: ["SMB", "SCSI", "SAS", "RDMA"],
    correct: 0,
    explain: "CIFS is based on the Server Message Block (SMB) protocol."
  },
  {
    mode: "nasproto",
    tag: "CIFS",
    q: "Which clients mainly use CIFS shares?",
    a: ["Windows-based clients", "Only Fibre Channel switches", "Only HDFS DataNodes", "Only object SDKs"],
    correct: 0,
    explain: "CIFS is primarily used by Windows-based clients to share files in non-domain or AD domain environments."
  },
  {
    mode: "nasproto",
    tag: "NFS",
    q: "NFS is widely used in which environment?",
    a: ["Linux/Unix", "Fibre Channel fabric only", "Windows AD only", "Object S3 only"],
    correct: 0,
    explain: "NFS is widely used in Linux/Unix environments."
  },
  {
    mode: "nasproto",
    tag: "NFS",
    q: "What is a key difference between NFSv3 and NFSv4?",
    a: ["NFSv3 is stateless; NFSv4 is stateful and has enhanced security", "NFSv3 is object storage; NFSv4 is RAID", "NFSv4 uses FC only", "NFSv3 cannot share files"],
    correct: 0,
    explain: "The chapter says NFSv3 is stateless, while NFSv4 is stateful, supports file lock functions, and has enhanced security."
  },
  {
    mode: "nasproto",
    tag: "Cross-protocol",
    q: "What does CIFS-NFS cross-protocol access require?",
    a: ["User mapping and centralized access control between Windows and UNIX permission systems", "Only RAID 0", "Only FC zoning", "Only FTP active mode"],
    correct: 0,
    explain: "Because Windows and UNIX use different authentication and permission mechanisms, storage systems use user mapping and access control."
  },
  {
    mode: "nasproto",
    tag: "HTTP",
    q: "Which protocol can be used for HTTP shared file systems through WebDAV?",
    a: ["HTTP/HTTPS", "FC-AL", "SAS expander", "RoCEv1 only"],
    correct: 0,
    explain: "The storage system supports HTTP shared file systems, and WebDAV allows clients to copy, move, modify, lock, unlock, and search resources."
  },
  {
    mode: "nasproto",
    tag: "FTP",
    q: "Which FTP port is used for control messages?",
    a: ["21", "20", "443", "3260"],
    correct: 0,
    explain: "FTP uses TCP port 21 for control messages and port 20 for data in the basic description."
  },
  {
    mode: "nasproto",
    tag: "FTP",
    q: "In FTP active mode, who initiates the data connection request?",
    a: ["FTP server", "FTP client", "NameNode", "FC switch"],
    correct: 0,
    explain: "In active mode, the FTP server initiates the data connection request from port 20."
  },
  {
    mode: "nasproto",
    tag: "FTP",
    q: "In FTP passive mode, who initiates the data connection request?",
    a: ["FTP client", "FTP server", "DataNode", "SCSI target"],
    correct: 0,
    explain: "In passive mode, the FTP client creates the data connection request."
  },
  {
    mode: "nasproto",
    tag: "NDMP",
    q: "What is NDMP designed for?",
    a: ["NAS data backup systems", "NVMe SSD queue management", "FC switch zoning", "CIFS domain authentication only"],
    correct: 0,
    explain: "NDMP is designed for NAS backup, allowing NAS devices to send data directly to backup media without a backup client agent."
  },
  {
    mode: "object",
    tag: "Object storage",
    q: "What is object service suitable for?",
    a: ["Large-scale data such as videos, images, backups, and archives", "Only SCSI bus addressing", "Only FC port mapping", "Only PCIe queue depth"],
    correct: 0,
    explain: "Object service is suitable for massive content, web disks, digital media, backup, and archiving."
  },
  {
    mode: "object",
    tag: "S3",
    q: "What API style does object service provide?",
    a: ["Standard S3 APIs based on HTTP/HTTPS REST APIs", "Only SCSI CDBs", "Only FC-AL frames", "Only CIFS sessions"],
    correct: 0,
    explain: "Object service provides standard S3 APIs, which are HTTP/HTTPS-based REST APIs."
  },
  {
    mode: "object",
    tag: "S3",
    q: "In S3 concepts, objects are stored in what?",
    a: ["Buckets", "LUN IDs", "FC zones", "SAS expanders"],
    correct: 0,
    explain: "S3 stores assets as objects, and objects are stored in buckets."
  },
  {
    mode: "object",
    tag: "RESTful",
    q: "RESTful APIs commonly use what to operate on resources?",
    a: ["HTTP and URIs", "Only SCSI device IDs", "Only FC HBAs", "Only SAS loops"],
    correct: 0,
    explain: "REST uses HTTP and URIs to add, delete, modify, and query resources."
  },
  {
    mode: "object",
    tag: "HDFS",
    q: "What is HDFS?",
    a: ["Hadoop Distributed File System", "Huawei Direct Fibre Switch", "Host Disk File Share", "Hyper Data Failover Service"],
    correct: 0,
    explain: "HDFS is Hadoop Distributed File System, a major component of open-source Hadoop."
  },
  {
    mode: "object",
    tag: "HDFS",
    q: "Which HDFS component stores file system metadata?",
    a: ["NameNode", "DataNode", "Bucket", "E_Port"],
    correct: 0,
    explain: "The NameNode stores and generates metadata of file systems."
  },
  {
    mode: "object",
    tag: "HDFS",
    q: "Which HDFS component stores actual data?",
    a: ["DataNode", "NameNode", "CIFS server", "FC router"],
    correct: 0,
    explain: "DataNodes store the actual data and report managed blocks to the NameNode."
  },
  {
    mode: "object",
    tag: "HDFS",
    q: "What are HDFS communication protocols based on?",
    a: ["TCP/IP", "FC-AL only", "SAS cables only", "FTP ports only"],
    correct: 0,
    explain: "The chapter says all HDFS communication protocols are based on TCP/IP."
  },
  {
    mode: "compareproto",
    tag: "Protocol sorting",
    q: "Which are file sharing protocols?",
    a: ["HTTP, NFS, and CIFS", "iSCSI, FC, and SAS only", "NVMe, PCIe, and RDMA only", "RAID 5 and RAID 6"],
    correct: 0,
    explain: "The chapter quiz lists HTTP, NFS, and CIFS as file sharing protocols; iSCSI is not file sharing."
  },
  {
    mode: "compareproto",
    tag: "Protocol sorting",
    q: "Which protocols belong mainly to SAN/block storage topics in this chapter?",
    a: ["SCSI, SAS, iSCSI, FC, PCIe/NVMe, RDMA/RoCE", "CIFS, NFS, HTTP, FTP only", "S3 and HDFS only", "AD and LDAP only"],
    correct: 0,
    explain: "The chapter groups SCSI/SAS, iSCSI/FC, PCIe/NVMe, and RDMA/RoCE under SAN protocols."
  },
  {
    mode: "compareproto",
    tag: "Protocol sorting",
    q: "Which option best matches protocol to use case?",
    a: ["iSCSI = block over IP; CIFS = Windows file sharing; S3 = object API", "iSCSI = object API; CIFS = FC SAN; S3 = SCSI bus", "NFS = PCIe SSD; FC = Windows file sharing; FTP = RAID", "RDMA = file lock only; HDFS = FC port"],
    correct: 0,
    explain: "This is the exam-style mapping: iSCSI carries block storage over IP, CIFS is Windows-style file sharing, and S3 is object storage API."
  }
];

const systemQuestions = [
  {
    mode: "components",
    tag: "Controller enclosure",
    q: "Which components belong inside a controller enclosure?",
    a: ["Controllers, BBUs, power modules, management modules, and interface modules", "Only disks and tape drives", "Only FC switches and CE switches", "Only host operating systems"],
    correct: 0,
    explain: "The chapter describes the controller enclosure as a modular system subrack that contains controllers, BBUs, power modules, management modules, and interface modules."
  },
  {
    mode: "components",
    tag: "Controller",
    q: "What is the controller in an intelligent storage system?",
    a: ["The core component that processes storage services and implements RAID/cache work", "A disk shelf that stores only magnetic data", "A file sharing protocol", "A backup tape library"],
    correct: 0,
    explain: "The controller is the core component. It processes host I/O, receives management commands, connects disks, and saves critical data to coffer disks."
  },
  {
    mode: "components",
    tag: "FE vs BE",
    q: "What are front-end ports mainly used for?",
    a: ["Service communication between storage and application servers", "Connecting only disk enclosures", "Supplying emergency battery power", "Storing dirty cache data"],
    correct: 0,
    explain: "Front-end ports are host-facing service ports. They connect the controller enclosure to application servers."
  },
  {
    mode: "components",
    tag: "FE vs BE",
    q: "What are back-end ports mainly used for?",
    a: ["Data channels between controller enclosures and disk enclosures", "User login authentication only", "Browser-based file download only", "Replacing controller cache"],
    correct: 0,
    explain: "Back-end ports connect controller enclosures and disk enclosures, giving controllers channels to read and write disks."
  },
  {
    mode: "components",
    tag: "Cache",
    q: "What is the role of cache in the controller?",
    a: ["A buffer between internal storage and external interfaces that accelerates I/O", "A physical disk shelf", "A Fibre Channel zone", "A cable type only"],
    correct: 0,
    explain: "Cache is memory used as a buffer for I/O processing. It helps improve storage read/write performance."
  },
  {
    mode: "components",
    tag: "BBU",
    q: "Why does a storage system use BBUs?",
    a: ["To supply temporary power so cache data can be protected during power failure", "To increase disk capacity by compression", "To replace all power modules", "To perform Fibre Channel zoning"],
    correct: 0,
    explain: "BBUs provide backup power if external power fails, allowing cached data to be written safely and avoiding data loss."
  },
  {
    mode: "components",
    tag: "Coffer disk",
    q: "What does a coffer disk store during unexpected power outage scenarios?",
    a: ["Dirty cache data, system configuration, logs, and important user data", "Only VLAN IDs", "Only FC switch firmware", "Only public website files"],
    correct: 0,
    explain: "Coffer disks store critical information such as dirty cache data, logs, and system configuration when an unexpected power outage occurs."
  },
  {
    mode: "components",
    tag: "BBU vs coffer disk",
    q: "Which comparison is correct?",
    a: ["BBU provides temporary power; coffer disk stores critical data", "BBU stores all user files; coffer disk supplies power", "Both are file sharing protocols", "Both are host operating systems"],
    correct: 0,
    explain: "Do not mix them up: the BBU is emergency power, while the coffer disk is where critical data can be saved."
  },
  {
    mode: "components",
    tag: "Disk enclosure",
    q: "What is a disk enclosure mainly made of?",
    a: ["System subrack, expansion modules, power modules, and disks", "Only controllers and host CPUs", "Only NAS protocols", "Only backup software"],
    correct: 0,
    explain: "The disk enclosure is the drive shelf. It includes the subrack, expansion modules, power modules, and disks."
  },
  {
    mode: "components",
    tag: "Expansion module",
    q: "What does an expansion module do?",
    a: ["Provides expansion ports for connecting controller enclosures and disk enclosures", "Calculates RAID parity only", "Stores HDFS metadata", "Authenticates CIFS users"],
    correct: 0,
    explain: "Expansion modules provide expansion ports such as P0/P1 for connecting enclosures."
  },
  {
    mode: "components",
    tag: "Switches",
    q: "Which switch type is used in FC SANs?",
    a: ["FC switch", "CE switch only", "Home Wi-Fi router", "USB hub"],
    correct: 0,
    explain: "FC switches are used in Fibre Channel SANs. CE switches are Ethernet switches used in IP SANs and scale-out networking."
  },
  {
    mode: "components",
    tag: "Switches",
    q: "Which switch type is commonly used in IP SANs and scale-out networks?",
    a: ["CE switch", "FC switch only", "SAS expander only", "Tape switch"],
    correct: 0,
    explain: "The chapter lists CE switches for IP SANs and scale-out storage networks."
  },
  {
    mode: "components",
    tag: "Smart disk enclosure",
    q: "What is a key feature of smart disk enclosures in the chapter?",
    a: ["They use RoCE ports and include processor/memory resources", "They are only passive tape shelves", "They connect only through FTP", "They cannot use SSDs"],
    correct: 0,
    explain: "Smart disk enclosures use RoCE ports and include components such as Kunpeng CPUs and DDR memory."
  },
  {
    mode: "disks",
    tag: "HDD structure",
    q: "Which parts belong to an HDD?",
    a: ["Platter, spindle, actuator arm, and read/write head", "Bucket, object, and REST API", "NameNode and DataNode only", "BBU and coffer disk only"],
    correct: 0,
    explain: "An HDD has mechanical parts such as platters, spindle, actuator arm, and read/write heads."
  },
  {
    mode: "disks",
    tag: "HDD structure",
    q: "What does the spindle do in an HDD?",
    a: ["Rotates the platters", "Moves the host operating system", "Creates FC zones", "Stores battery charge"],
    correct: 0,
    explain: "The spindle rotates the platters. The actuator arm moves the read/write heads."
  },
  {
    mode: "disks",
    tag: "HDD structure",
    q: "What does the actuator arm do in an HDD?",
    a: ["Moves the read/write head to the correct position", "Rotates the disk platter", "Supplies emergency power", "Carries S3 object metadata"],
    correct: 0,
    explain: "The actuator arm positions the read/write head over the correct area of the platter."
  },
  {
    mode: "disks",
    tag: "HDD structure",
    q: "What does the read/write head do in an HDD?",
    a: ["Reads and writes magnetic data on the platter surface", "Provides Ethernet failover", "Creates storage pools", "Runs HTTP APIs"],
    correct: 0,
    explain: "The read/write head reads or writes binary data represented magnetically on the platter."
  },
  {
    mode: "disks",
    tag: "HDD performance",
    q: "Which are HDD performance indicators in the chapter?",
    a: ["Rotation speed, data transfer rate, and average access time", "Disk capacity, color, and label font", "Bucket count and object count", "VLAN ID and IQN only"],
    correct: 0,
    explain: "The chapter quiz lists rotation speed, data transfer rate, and average access time as HDD performance indicators. Disk capacity is not the performance metric in that question."
  },
  {
    mode: "disks",
    tag: "HDD performance",
    q: "Which option is NOT an HDD performance indicator in the chapter quiz?",
    a: ["Disk capacity", "Rotation speed", "Data transfer rate", "Average access time"],
    correct: 0,
    explain: "Capacity is important, but the chapter's HDD performance question excludes disk capacity."
  },
  {
    mode: "disks",
    tag: "SSD types",
    q: "Which SSD cell types are listed by the chapter?",
    a: ["SLC, MLC, TLC, and QLC", "NFS, CIFS, FTP, and HTTP", "RAID 0, RAID 1, RAID 5, and RAID 6", "FC, iSCSI, SAS, and SATA only"],
    correct: 0,
    explain: "The chapter quiz lists SLC, MLC, TLC, and QLC as SSD types."
  },
  {
    mode: "disks",
    tag: "SSD performance",
    q: "Why are SSDs strong at random read/write compared with HDDs?",
    a: ["They have no mechanical seek or rotational latency", "They always use tape backup", "They require one dedicated parity disk", "They only work through FTP"],
    correct: 0,
    explain: "SSDs have no mechanical moving parts, so they avoid seek time and rotational latency."
  },
  {
    mode: "disks",
    tag: "SSD writes",
    q: "What happens when SSD data is rewritten?",
    a: ["New data is written to a new physical page and old data becomes invalid/garbage", "The same physical page is overwritten in place every time", "The data is converted to FC zoning", "The BBU becomes the storage medium"],
    correct: 0,
    explain: "The chapter explains that rewritten data is written to a new physical page, while old data becomes invalid and later garbage-collected."
  },
  {
    mode: "disks",
    tag: "SSD channels",
    q: "Why do SSD channels matter?",
    a: ["Data distributed across channels can be read and written in parallel", "Channels define only NAS usernames", "Channels are the same as FC zones", "Channels disable cache"],
    correct: 0,
    explain: "SSD controllers can use multiple channels in parallel. Even distribution helps improve read/write performance."
  },
  {
    mode: "disks",
    tag: "80/20 rule",
    q: "What does the 80/20 rule mean in the storage media section?",
    a: ["A small amount of hot data can account for most access activity", "80% of disks must be SSDs", "20% of controllers must fail", "80% of traffic must be FTP"],
    correct: 0,
    explain: "The chapter uses the 80/20 rule to explain hot data: a smaller portion of data may drive most storage access."
  },
  {
    mode: "disks",
    tag: "Media selection",
    q: "Which media is best for high-concurrency random read/write database workloads?",
    a: ["SSD", "Tape only", "NL-SAS only", "Optical fiber only"],
    correct: 0,
    explain: "The chapter maps Class A high-concurrency random read/write workloads, such as databases, to SSDs."
  },
  {
    mode: "disks",
    tag: "Media selection",
    q: "Which media class is best for backup or rarely accessed data?",
    a: ["SATA, NL-SAS, or tape", "SCM only", "Host RAM only", "FC switch memory only"],
    correct: 0,
    explain: "The chapter maps Class C backup and rarely accessed data to SATA, NL-SAS, and tape."
  },
  {
    mode: "disks",
    tag: "SCM",
    q: "What is SCM in this chapter?",
    a: ["Nonvolatile storage-class memory used as a very fast cache acceleration medium", "A Windows file sharing protocol", "A RAID level", "A disk enclosure power module"],
    correct: 0,
    explain: "SCM is nonvolatile, slightly slower than memory, and much faster than NAND flash. The chapter uses it as SmartCache acceleration."
  },
  {
    mode: "interfaces",
    tag: "Interface module",
    q: "What do front-end GE interface modules connect?",
    a: ["Storage devices to application servers", "Only controller enclosures to disk enclosures", "Only coffer disks to BBUs", "Only tape libraries to printers"],
    correct: 0,
    explain: "GE front-end interface modules provide service communication between storage devices and application servers."
  },
  {
    mode: "interfaces",
    tag: "RoCE interface",
    q: "What do front-end RoCE interface modules connect?",
    a: ["Storage devices to application servers using RoCE", "Only HDD spindle motors", "Only NFS directories", "Only backup tapes"],
    correct: 0,
    explain: "The chapter lists 25G/100G RoCE front-end interface modules for connecting storage devices to application servers."
  },
  {
    mode: "interfaces",
    tag: "SmartIO",
    q: "What must be true when using optical modules on SmartIO ports?",
    a: ["The optical module rate must match the port label", "Any optical module rate always works", "Only USB modules are allowed", "The BBU must be removed first"],
    correct: 0,
    explain: "If an optical module rate does not match the port label, alarms may be generated and the port may be unavailable."
  },
  {
    mode: "interfaces",
    tag: "Back-end modules",
    q: "What does a 100G RDMA back-end module connect?",
    a: ["Controller enclosures to scale-out switches or smart disk enclosures", "Only Windows shares", "Only FTP clients", "Only HDD platters"],
    correct: 0,
    explain: "The chapter says 100G RDMA back-end modules connect controller enclosures to scale-out switches or smart disk enclosures."
  },
  {
    mode: "interfaces",
    tag: "Back-end modules",
    q: "What does a 12G SAS expansion module connect?",
    a: ["Controller enclosures to 2U SAS disk enclosures", "Hosts to HTTP servers", "NameNodes to DataNodes only", "Users to CIFS shares only"],
    correct: 0,
    explain: "The 12G SAS expansion module connects controller enclosures to 2U SAS disk enclosures."
  },
  {
    mode: "interfaces",
    tag: "Scale-out ports",
    q: "Which module is used for direct scale-out connections between controller enclosures?",
    a: ["25G RDMA interface module", "CIFS protocol module", "Tape interface only", "VGA display module"],
    correct: 0,
    explain: "The chapter says 25G RDMA interface modules provide direct connections between controller enclosures in scale-out networking."
  },
  {
    mode: "interfaces",
    tag: "Cable awareness",
    q: "Which cables/modules are mentioned for storage system connections in Chapter 4?",
    a: ["Mini SAS HD, QSFP28, SFP28, MPO-to-DLC, and optical fiber", "Only HDMI and USB-C", "Only power cords", "Only FTP control cables"],
    correct: 0,
    explain: "The chapter lists storage cables such as mini SAS HD, 100G QSFP28, 25G SFP28, MPO-to-DLC optical fiber, and optical fiber."
  },
  {
    mode: "expansion",
    tag: "Scale-up",
    q: "What is scale-up expansion?",
    a: ["Adding disks to existing storage systems", "Adding only management users", "Converting NAS into FTP", "Replacing cache with VLANs"],
    correct: 0,
    explain: "Scale-up is vertical expansion by adding storage disks to existing storage systems."
  },
  {
    mode: "expansion",
    tag: "Scale-up",
    q: "What is a downside of scale-up as the system grows?",
    a: ["It can hit performance and management bottlenecks", "It cannot add disks", "It never uses disk enclosures", "It only works with object storage"],
    correct: 0,
    explain: "Scale-up is simple at first, but bottlenecks can appear as the system grows."
  },
  {
    mode: "expansion",
    tag: "Scale-out",
    q: "What is scale-out expansion?",
    a: ["Adding controllers horizontally", "Adding only disk capacity to one controller", "Moving from NFS to FTP", "Replacing all SSDs with RAM"],
    correct: 0,
    explain: "Scale-out is horizontal expansion. In this chapter, it expands by adding controllers."
  },
  {
    mode: "expansion",
    tag: "Scale-out",
    q: "What is a tradeoff of scale-out expansion?",
    a: ["Better scaling potential but more software and management complexity", "No management complexity ever", "It disables all front-end ports", "It cannot improve capacity or performance"],
    correct: 0,
    explain: "The chapter notes that scale-out can improve efficiency as scale increases, but software and management become more complex."
  },
  {
    mode: "expansion",
    tag: "Scale-up networking",
    q: "Which principles are used for SAS disk enclosure scale-up networking?",
    a: ["Port consistency, dual-plane networking, symmetric networking, and cascade threshold control", "FTP active mode and passive mode", "Only NFS file locking", "Only object bucket versioning"],
    correct: 0,
    explain: "The chapter lists principles such as port consistency, dual-plane networking, symmetric networking, forward/backward connection, and cascading thresholds."
  },
  {
    mode: "expansion",
    tag: "Smart disk enclosure",
    q: "In smart disk enclosure scale-up networking, how are expansion ports commonly connected?",
    a: ["P1 downlink ports connect to P0 uplink ports", "FTP port 20 connects to port 21", "NFSv3 connects to NFSv4", "A bucket connects to an object"],
    correct: 0,
    explain: "The smart disk enclosure scale-up principle says P1 downlink ports connect to P0 uplink ports."
  },
  {
    mode: "expansion",
    tag: "Direct scale-out",
    q: "What is a limitation of direct-connection scale-out networking?",
    a: ["It supports up to four controllers and cannot be expanded to eight-controller switched networking", "It supports unlimited controllers with no switches", "It works only for NAS file sharing", "It requires no optical modules"],
    correct: 0,
    explain: "The chapter states that direct-connection scale-out supports a maximum of four controllers and cannot be expanded into an eight-controller switched network."
  },
  {
    mode: "expansion",
    tag: "Switched scale-out",
    q: "In switched scale-out networking, what do the internal management and internal data networks share?",
    a: ["The same physical network with QoS isolation", "Only a USB cable", "Only FTP sessions", "Only coffer disks"],
    correct: 0,
    explain: "The chapter says internal management and internal data networks share the same physical network and are isolated by QoS."
  },
  {
    mode: "ioflow",
    tag: "Local write",
    q: "What is a local write?",
    a: ["A host write sent to the LUN-owning engine", "A write sent only to an FC switch", "A write to a NAS web page", "A write that skips cache and protection"],
    correct: 0,
    explain: "In a local write, the host writes to the owning engine of the LUN. The engine writes cache, mirrors/protects data, returns success, and flushes dirty data later."
  },
  {
    mode: "ioflow",
    tag: "Non-local write",
    q: "What happens in a non-local write?",
    a: ["The receiving non-owner engine forwards the request to the LUN-owning engine", "The request is discarded", "The host must use FTP instead", "The BBU writes the data directly to tape"],
    correct: 0,
    explain: "If a write reaches a non-owning engine, that engine forwards the request to the owner engine for cache/protection processing."
  },
  {
    mode: "ioflow",
    tag: "Local read",
    q: "What happens first in a local read?",
    a: ["The owning engine checks whether the requested data is in cache", "The system always reads tape first", "The FC switch calculates parity", "The BBU authenticates the host"],
    correct: 0,
    explain: "For local reads, the owning engine checks cache first. On a cache miss, it reads from local or remote disks."
  },
  {
    mode: "ioflow",
    tag: "Cache hit",
    q: "What is a cache hit?",
    a: ["Requested data is found in cache and can be returned without reading disk", "The disk spindle fails", "An optical module mismatch", "A RAID group rebuild"],
    correct: 0,
    explain: "A cache hit means the data is already in cache, so the system can return it faster."
  },
  {
    mode: "ioflow",
    tag: "Non-local read",
    q: "What happens in a non-local read?",
    a: ["The non-owner engine forwards the request to the owning engine, then returns the response", "The request changes into object storage", "The host must remap the LUN manually", "The coffer disk becomes the front-end port"],
    correct: 0,
    explain: "For non-local reads, the engine that receives the request forwards it to the owning engine. The owning engine checks cache/disk and returns the data."
  },
  {
    mode: "compareSystem",
    tag: "Sorting",
    q: "Which pairing is correct?",
    a: ["Controller enclosure = controllers/modules; disk enclosure = disks/expansion modules", "Controller enclosure = only HDD platters; disk enclosure = host CPUs", "Controller enclosure = NFS; disk enclosure = CIFS", "Controller enclosure = S3 bucket; disk enclosure = object"],
    correct: 0,
    explain: "Controller enclosures hold the storage controller side. Disk enclosures are drive shelves with disks and expansion modules."
  },
  {
    mode: "compareSystem",
    tag: "Sorting",
    q: "Which pairing is correct?",
    a: ["Front-end = host-facing; back-end = disk/internal-facing", "Front-end = battery; back-end = coffer disk", "Front-end = platter; back-end = spindle", "Front-end = FTP; back-end = HTTP"],
    correct: 0,
    explain: "Front-end ports face application servers. Back-end ports face disk enclosures/internal storage networking."
  },
  {
    mode: "compareSystem",
    tag: "Sorting",
    q: "Which pairing is correct?",
    a: ["Scale-up = add disks; scale-out = add controllers", "Scale-up = add users; scale-out = add file names", "Scale-up = FTP active; scale-out = FTP passive", "Scale-up = HDD only; scale-out = tape only"],
    correct: 0,
    explain: "Scale-up expands vertically by adding disks. Scale-out expands horizontally by adding controllers."
  },
  {
    mode: "compareSystem",
    tag: "Sorting",
    q: "Which pairing is correct?",
    a: ["SSD = no mechanical seek; HDD = moving heads and rotating platters", "SSD = spindle and actuator; HDD = flash pages only", "SSD = FC switch; HDD = CE switch", "SSD = NFS; HDD = CIFS"],
    correct: 0,
    explain: "SSDs use flash and have no mechanical seek. HDDs use moving mechanical parts."
  },
  {
    mode: "compareSystem",
    tag: "Sorting",
    q: "Which statement best describes local vs non-local I/O?",
    a: ["Local I/O reaches the owning engine first; non-local I/O is forwarded to the owner", "Local I/O means NAS only; non-local means RAID only", "Local I/O skips cache; non-local always skips disks", "Local I/O uses FTP; non-local uses HTTP"],
    correct: 0,
    explain: "The owner engine is the key idea. Local I/O goes directly to the owner; non-local I/O reaches another engine first and must be forwarded."
  }
];

function pickReviewQuestions(source, chapterName, countsByMode) {
  const pickedByMode = {};
  return source
    .filter((question) => {
      const limit = countsByMode[question.mode] || 0;
      const count = pickedByMode[question.mode] || 0;
      if (count >= limit) return false;
      pickedByMode[question.mode] = count + 1;
      return true;
    })
    .map((question) => ({
      ...question,
      mode: "review",
      tag: `${chapterName} · ${question.tag}`
    }));
}

const reviewQuestions = [
  ...pickReviewQuestions(questions, "Ch1", {
    traditional: 12,
    raid2: 10,
    huawei: 5
  }),
  ...pickReviewQuestions(networkQuestions, "Ch2", {
    das: 4,
    nas: 5,
    san: 8,
    compare: 4,
    distributed: 4
  }),
  ...pickReviewQuestions(protocolQuestions, "Ch3", {
    sanproto: 8,
    pcie: 4,
    rdma: 4,
    nasproto: 6,
    object: 5,
    compareproto: 3
  })
];

const mockMistakeQuestions = [
  {"id":"Q003","mode":"mistakes","tag":"Q003 · Scale-out storage","q":"Which of the following is incorrect about scale-out storage?","a":["Large-scale horizontal expansion","Expansion by adding nodes increasing both computing capability and storage space","Not supporting elastic EC for data redundancy protection","Storage resource pooling and virtualization"],"correct":2,"explain":"Scale-out storage is designed for horizontal expansion, resource pooling, virtualization, and elastic redundancy mechanisms such as EC."},
  {"id":"Q006","mode":"mistakes","tag":"Q006 · RAID 10","q":"Which of the following statements is incorrect about the working principles of RAID 10?","a":["RAID 10 consists of nested RAID 1 + RAID 0 levels and allows disks to be mirrored (RAID 1) and then striped (RAID 0).","RAID 10 group consists of an even number of disks.","When data is written to the RAID 10 group, data blocks are concurrently written to sub-groups by mirroring.","RAID 10 can restore data from any two faulty disks."],"correct":3,"explain":"RAID 10 can survive multiple failures only if they are not in the same mirror pair. Two failed disks in the same mirror pair can cause data loss."},
  {"id":"Q007","mode":"mistakes","tag":"Q007 · OceanStor scale-out storage interface layer","q":"Use Huawei OceanStor scale-out storage as an example. Which of the following statements is incorrect about the storage interface layer of the software architecture?","a":["SCSI and iSCSI interface protocols are supported.","S3 and Swift protocols are supported.","The HDFS protocol is supported.","The InfiniBand (IB) protocol is supported."],"correct":3,"explain":"SCSI/iSCSI, S3/Swift, and HDFS are valid storage access protocols in this context; IB is not the storage interface-layer protocol listed here."},
  {"id":"Q011","mode":"mistakes","tag":"Q011 · Snapshot COW and rollback","q":"An employee performs the following operations in the storage system: 9:00 - created and activated a snapshot for LUN A; 10:00 - modified all data on the snapshot LUN and source LUN; and 11:00 - rolled back data using the snapshot. Which of the following statements is incorrect?","a":["Data in the COW space is that of LUN A at 9:00.","Data in the COW space is that of LUN A at 10:00.","Data of the source LUN is the modified data at 10:00.","After the rollback using a snapshot, the source LUN data is changed to the snapshot LUN data modified at 10:00."],"correct":1,"explain":"Copy-on-write preserves the source data as it existed when the snapshot was created. Later changes go elsewhere, so the COW space is not LUN A at 10:00."},
  {"id":"Q013","mode":"mistakes","tag":"Q013 · DME Storage integration protocols","q":"Which of the following protocols cannot be used by DME Storage to connect to customers' legacy O&M and cloud management platforms?","a":["RESTful","SSH","SNMP","Redfish"],"correct":3,"explain":"RESTful, SSH, and SNMP are common integration/management protocols; Redfish is not the one used here."},
  {"id":"Q014","mode":"mistakes","tag":"Q014 · HyperCDP","q":"In Huawei all-flash storage, which of the following is the minimum interval for creating HyperCDP objects in a HyperCDP schedule?","a":["5 seconds","4 seconds","3 seconds","2 seconds"],"correct":2,"explain":"Huawei all-flash HyperCDP schedules can create objects at a minimum interval of 3 seconds."},
  {"id":"Q016","mode":"mistakes","tag":"Q016 · Storage management software","q":"Which storage management software can automatically report alarms from connected storage devices to Huawei service support center?","a":["SmartKit","CLI","DeviceManager","eService"],"correct":3,"explain":"eService is used for remote service/support reporting, including automatic alarm reporting."},
  {"id":"Q017","mode":"mistakes","tag":"Q017 · OceanStor Pacific access control","q":"Which of the following access control policies is used by OceanStor Pacific series?","a":["ACL","PBAC","RBAC","ABAC"],"correct":2,"explain":"RBAC assigns permissions based on roles rather than individual users or attributes."},
  {"id":"Q018","mode":"mistakes","tag":"Q018 · Huawei storage solutions","q":"Which of the following is not a Huawei storage solution?","a":["Disaster recovery (DR) solution","Backup solution","Archive solution","Replication solution"],"correct":3,"explain":"DR, backup, and archive are solution categories; replication is not listed as a separate storage solution category here."},
  {"id":"Q020","mode":"mistakes","tag":"Q020 · OceanStor all-flash initial configuration","q":"Assume a bank acquired a new all-flash storage device, for example, a Huawei OceanStor all-flash storage device. An engineer performed initial configuration on the device. Which operation is correct?","a":["Use port 8088 for DeviceManager login.","Create a thick LUN.","Configure a RAID 5 policy to ensure the system tolerates failure of two chunks.","Create 600 hosts in batches."],"correct":0,"explain":"DeviceManager uses port 8088 for login in this OceanStor configuration context."},
  {"id":"Q021","mode":"mistakes","tag":"Q021 · Storage virtualization","q":"When designing their data center, a media company purchased multi-vendor storage devices. The CTO wants to centrally manage these devices through storage virtualization. Which of the following is not a function of storage virtualization?","a":["Hiding the complexity of physical devices","Enabling servers to directly access storage hardware","Supporting unified deployment and management","Reducing the limitations of physical storage capacity"],"correct":1,"explain":"Storage virtualization abstracts physical storage, hides device complexity, and supports unified management. Direct server access to physical storage hardware is the opposite of virtualization."},
  {"id":"Q022","mode":"mistakes","tag":"Q022 · Snapshot rollback","q":"An engineer maps the storage system to the file server to store various enterprise files. One day, the file system is attacked by viruses and files cannot be opened. To access the files, the engineer performs a snapshot-based rollback. Which of the following statements is incorrect?","a":["Snapshot-based rollback can quickly restore data.","Snapshot-based rollback may cause data loss.","During snapshot-based rollback, if data is written to the source LUN, the data is written to the source LUN first and then rolled back.","When no host reads or writes data, the snapshot data is rolled back to the source volume in sequence."],"correct":2,"explain":"During rollback, normal host writes to the source LUN are not simply written first and then rolled back as stated. Rollback copies snapshot data back to the source volume; when no host I/O occurs, the rollback can proceed sequentially."},
  {"id":"Q023","mode":"mistakes","tag":"Q023 · RAID 2.0+","q":"Compared with traditional RAID technologies, which of the following is not a feature of RAID 2.0+?","a":["RAID 2.0+ implements block virtualization to enable data to be automatically and evenly distributed onto all disks in a storage pool, preventing unbalanced loads.","Independent global or local hot spare disks must be manually configured.","It further shortens the reconstruction time by the means of thin reconstruction in the event of a disk fault.","It implements many-to-many reconstruction and reconstructed data is written to multiple disks in parallel."],"correct":1,"explain":"RAID 2.0+ uses virtualization and distributed spare capacity rather than requiring manually configured independent hot spare disks. Thin reconstruction and many-to-many parallel reconstruction are features."},
  {"id":"Q026","mode":"mistakes","tag":"Q026 · Forms of data","q":"Which of the following are forms of data?","a":["Text","Image","Audio","Video"],"correct":[0,1,2,3],"explain":"Data can appear as text, images, audio, video, and other digital representations."},
  {"id":"Q028","mode":"mistakes","tag":"Q028 · Disk types","q":"A company purchases a Huawei storage device that uses SAS disks. In addition to SAS disks, which types of disks are supported by the storage device?","a":["NL-SAS disks","SCSI disks","Fibre Channel disks","SSDs"],"correct":[0,3],"explain":"In this context, the storage device supports NL-SAS disks and SSDs in addition to SAS disks. SCSI is a protocol/interface family, not the supported disk type being asked for here."},
  {"id":"Q029","mode":"mistakes","tag":"Q029 · Storage cabling","q":"Which of the following statements are correct about cabling in a storage system?","a":["One end of the optical fiber can connect to a Fibre Channel HBA, and the other can connect to a Fibre Channel switch or storage device.","Serial cables are used to connect expansion ports and connect controller enclosures to disk enclosures.","Mini SAS HD cables are used to connect PCIe ports on controllers in a controller enclosure to data switches.","There are mini SAS HD electrical cables and mini SAS HD optical cables."],"correct":[0,3],"explain":"FC optical fiber can connect FC HBAs to FC switches or storage devices. Mini SAS HD has electrical and optical cable forms; the B and C descriptions do not match the correct cabling use."},
  {"id":"Q030","mode":"mistakes","tag":"Q030 · NVMe advantages","q":"Which of the following are advantages of NVMe?","a":["Low latency","High bandwidth","High IOPS","Low power consumption"],"correct":[0,1,2,3],"explain":"NVMe is designed for SSDs and provides low latency, high bandwidth, high IOPS, and efficient operation."},
  {"id":"Q031","mode":"mistakes","tag":"Q031 · Logical ports","q":"Using a Huawei OceanStor all-flash storage device as an example, which statements about logical ports are correct?","a":["Logical ports are created based on bond ports, VLAN ports, or Ethernet ports.","Logical ports are virtual ports that carry host services.","An IP address is assigned to each logical port for carrying services.","Different logical ports can have the same IP address."],"correct":[0,1,2],"explain":"Logical ports are virtual service ports created on bond, VLAN, or Ethernet ports. Each logical port has an IP address, and different logical ports cannot share the same IP."},
  {"id":"Q032","mode":"mistakes","tag":"Q032 · HyperCDP consistency groups","q":"Which of the following operations can be performed on HyperCDP consistency groups?","a":["Create","Delete","Rollback","Synchronize"],"correct":[0,1,2],"explain":"HyperCDP consistency groups support create, delete, and rollback operations. Synchronize is not the operation listed for these groups here."},
  {"id":"Q033","mode":"mistakes","tag":"Q033 · SmartThin","q":"A company provides multiple services but has limited storage space and plans to improve storage space using SmartThin. Which statements about SmartThin are correct?","a":["It virtualizes storage resources.","It implements on-demand allocation.","It doesn't allocate all space in advance, and presents a virtual storage space larger than the physical storage space.","LUN whose capacity is greater than the max. physical available capacity of the storage pool cannot be created."],"correct":[0,1,2],"explain":"SmartThin virtualizes storage resources, allocates on demand, and can present logical/virtual capacity larger than current physical capacity. Therefore D is false."},
  {"id":"Q034","mode":"mistakes","tag":"Q034 · DAS limitations","q":"Assume a company purchased DAS devices to store files and service data at the startup stage. With the increase of service volume and diversity, which problems may occur?","a":["It is difficult to expand capacity of the DAS architecture once data reaches to a certain volume.","As the number of file servers that share the DAS storage increases, no more servers can be added.","Data and materials are scattered on different devices and cannot be managed centrally.","Scattered data and materials cannot be easily queried across devices."],"correct":[0,1,2,3],"explain":"DAS has poor scalability and decentralized management. As data and services grow, capacity expansion, server sharing, central management, and cross-device querying all become problems."},
  {"id":"Q035","mode":"mistakes","tag":"Q035 · PCIe scale-out and IP scale-out","q":"Which statements are true about PCIe scale-out and IP scale-out?","a":["PCIe scale-out uses the PCIe protocol while IP scale-out uses the IP protocol.","PCIe scale-out integrates PCIe channels and the remote direct memory access (RDMA) technology to implement service switching between controllers.","PCIe scale-out supports the Ethernet protocol.","PCIe scale-out supports the Internet wide-area RDMA protocol (iWARP) technology."],"correct":[0,1],"explain":"PCIe scale-out uses PCIe and RDMA-related controller interconnect behavior, while IP scale-out uses IP. Ethernet/iWARP belong to IP/RDMA networking concepts, not PCIe scale-out here."},
  {"id":"Q036","mode":"mistakes","tag":"Q036 · OceanStor Pacific block service architecture","q":"Which of the following layers are included in the system architecture of OceanStor Pacific block service?","a":["Storage driver layer","Storage service layer","Storage engine layer","Storage network layer"],"correct":[0,1,2],"explain":"The block service architecture includes storage driver, storage service, and storage engine layers."},
  {"id":"Q037","mode":"mistakes","tag":"Q037 · Storage device subsystems","q":"Which of the following are subsystems of a storage device?","a":["Disk subsystem","Control subsystem","Connection subsystem","Storage management software subsystem"],"correct":[0,1,2,3],"explain":"A storage device includes disk, control, connection, and storage management software subsystems."},
  {"id":"Q038","mode":"mistakes","tag":"Q038 · Data management phases","q":"Data management is the process of using hardware and software technologies to collect, store, process, and utilize data. Which phases are included in data management according to the time sequence?","a":["Manual management","File system management","Traditional database management","Big data management"],"correct":[0,1,2,3],"explain":"The time sequence starts with manual management, then file system management, traditional database management, and big data management."},
  {"id":"Q039","mode":"mistakes","tag":"Q039 · HyperMetro arbitration","q":"Assume an enterprise runs active-active data centers in cities A and B. If the HyperMetro arbitration mode is static priority mode, site A is the static priority site. Which statements are correct?","a":["Link faults between the storage systems will not affect services at both sites A and B.","If site A is faulty, site B automatically takes over its services.","If site B is faulty, site A automatically takes over its services.","If the links between the host and site A and between the host and site B are faulty, the status of the HyperMetro pair is Normal."],"correct":[2,3],"explain":"With static priority and site A as the priority site, site A takes over if site B fails. Host-link faults do not necessarily make the HyperMetro pair abnormal, but inter-storage link faults and priority-site failure behavior are not as selected."},
  {"id":"Q040","mode":"mistakes","tag":"Q040 · HyperClone","q":"Which of the following statements about HyperClone are correct?","a":["If the source LUN fails, service data can be recovered from a time point before the fault occurred, using the data backed up through HyperClone.","If a disk failure occurs on the source LUN of HyperClone, you can split the target LUN from the source LUN to continue providing services.","If a logical fault occurs on the source LUN, data can be reversely synchronized from the target LUN to the source LUN to recover services on the source LUN.","Multiple target LUNs can be created through HyperClone to provide the service data on the source LUN for multiple applications."],"correct":[1,2,3],"explain":"HyperClone can split a target LUN, reverse synchronize data for logical fault recovery, and create multiple target LUNs. Point-in-time recovery is more snapshot/backup-like wording."},
  {"id":"Q041","mode":"mistakes","tag":"Q041 · Flash chips","q":"Which of the following statements are correct about flash chips?","a":["SLC stores one bit of data per cell.","MLC stores two bits of data per cell.","TLC stores four bits of data per cell.","QLC stores three bits of data per cell."],"correct":[0,1],"explain":"SLC stores 1 bit per cell, MLC stores 2, TLC stores 3, and QLC stores 4."},
  {"id":"Q042","mode":"mistakes","tag":"Q042 · SmartTier","q":"Assume a bank enables SmartTier for the bill transaction system. During I/O monitoring, it is found that the written data is frequently accessed. Which configurations help optimize performance?","a":["Capacity allocation preferentially from the high-performance tier","Migration to the higher-performance tier","Capacity allocation preferentially from the capacity tier","Migration to the lower-performance tier"],"correct":[0,1],"explain":"Frequently accessed data should be allocated from or migrated to the high-performance tier, not the capacity/lower-performance tier."},
  {"id":"Q043","mode":"mistakes","tag":"Q043 · IP SAN / iSCSI offload","q":"On the IP SAN of an enterprise, host resource usage is high because initiator software on the host occupies many resources during conversion of iSCSI packets into TCP/IP packets. Which solutions can solve the problem?","a":["Change the 10GE network to a 25GE network.","Replace the NIC with a TOE NIC.","Replace the NIC with an iSCSI HBA.","Expand the capacity of the storage device."],"correct":[1,2],"explain":"TOE NICs and iSCSI HBAs offload TCP/IP or iSCSI processing from the host CPU. Faster Ethernet or more storage capacity does not solve host CPU overhead from software initiator processing."},
  {"id":"Q044","mode":"mistakes","tag":"Q044 · O&M standard systems","q":"Which of the following are O&M standard systems?","a":["Information Technology Infrastructure Library (ITIL)","International Organization for Standardization 2000 (ISO2000)","Institute of Electrical and Electronics Engineers (IEEE)","Storage Networking Industry Association (SNIA)"],"correct":[0,1],"explain":"ITIL and ISO2000/ISO 20000 are O&M/service management standards. IEEE and SNIA are industry organizations/standards bodies, not the O&M standard systems in this question."},
  {"id":"Q045","mode":"mistakes","tag":"Q045 · CLI command syntax","q":"During routine maintenance of a storage device, engineer A runs the change user user_name=newuser level=admin command on the CLI. Which are true about this command?","a":["change operation is performed.","The operation object is user_name.","The attribute of the operation object is user.","The user level is changed to admin."],"correct":[0,3],"explain":"The operation is change and the user level is changed to admin. The operation object is user; user_name and level are parameters/attributes."},
  {"id":"Q047","mode":"mistakes","tag":"Q047 · Backup networking modes","q":"In backup networking mode, LAN Free and Server Free have minimal impact on the host performance.","a":["True","False"],"correct":0,"explain":"LAN Free and Server Free backup modes are designed to reduce host/LAN load compared with traditional LAN backup."},
  {"id":"Q052","mode":"mistakes","tag":"Q052 · SmartMigration","q":"SmartMigration achieves full replication of source LUN data to the target LUN. After the replication is complete, the target LUN takes over all services from the source LUN.","a":["True","False"],"correct":0,"explain":"SmartMigration fully replicates source LUN data to a target LUN, and after completion the target LUN can take over services."},
  {"id":"Q053","mode":"mistakes","tag":"Q053 · SAN and NAS usage","q":"In a bank's check image system, structured data is typically stored on SAN storage arrays, while unstructured data is stored on NAS storage arrays.","a":["True","False"],"correct":0,"explain":"Structured data is commonly placed on SAN/block storage, while unstructured file data is commonly placed on NAS/file storage."},
  {"id":"Q054","mode":"mistakes","tag":"Q054 · RAID 2.0+ extents","q":"Each CKG is divided into logical storage spaces called extents, which are the minimum unit for migration and statistics of hot data. One storage pool may have extents of different sizes.","a":["True","False"],"correct":1,"explain":"Extents are the basic unit for hot-data statistics and migration, but extents in a storage pool are not mixed arbitrary sizes as stated."},
  {"id":"Q056","mode":"mistakes","tag":"Q056 · OceanStor Pacific SmartIndexing","q":"In addition to running lossless semantic and performance features, OceanStor Pacific series provides the SmartIndexing feature to implement multi-protocol interworking of file, object, and HDFS services. This allows one copy of data to be accessed through multiple semantics without format conversion.","a":["True","False"],"correct":1,"explain":"The described one-copy multi-protocol interworking without format conversion is not SmartIndexing as stated."},
  {"id":"Q057","mode":"mistakes","tag":"Q057 · SmartMatrix","q":"Huawei OceanStor all-flash storage systems use the SmartMatrix architecture that allows all controllers to share all front- and back-end interface modules. This ensures failure of any controller will not impact service running.","a":["True","False"],"correct":0,"explain":"SmartMatrix enables controllers to share front-end and back-end modules, improving reliability so a controller failure does not interrupt services."},
  {"id":"Q058","mode":"mistakes","tag":"Q058 · Flash media / SCM","q":"In terms of flash medium chip technology, QLC is cheaper than TLC and supports frequent rewriting, while storage class memory (SCM) provides high-speed read/write and is best suited to server memory.","a":["True","False"],"correct":1,"explain":"QLC is cheaper but has lower endurance than TLC, so it is not suited to frequent rewriting. SCM is high-speed persistent storage-class media, not simply best suited as server memory in this wording."},
  {"id":"Q060","mode":"mistakes","tag":"Q060 · HyperClone / LUN types","q":"In Huawei OceanStor storage systems, when you create a clone, the original LUN can be a thick LUN or a thin LUN, and the secondary LUN can only be a thin LUN.","a":["True","False"],"correct":0,"explain":"For OceanStor clone creation in this question, the original LUN can be thick or thin, but the secondary LUN is limited to thin LUN."}
];

const mockMistakeSections = {
  foundation: ["Q003", "Q006", "Q023", "Q026", "Q030", "Q034", "Q038", "Q043", "Q053", "Q054"],
  hardware: ["Q028", "Q029", "Q031", "Q035", "Q037", "Q041", "Q057", "Q058"],
  smart: ["Q021", "Q033", "Q042", "Q052", "Q056"],
  protection: ["Q011", "Q014", "Q022", "Q032", "Q039", "Q040", "Q047", "Q060"],
  om: ["Q013", "Q016", "Q020", "Q044", "Q045"],
  products: ["Q007", "Q017", "Q018", "Q036"]
};

mockMistakeQuestions.forEach((question) => {
  const section = Object.entries(mockMistakeSections).find(([, ids]) => ids.includes(question.id));
  question.section = section ? section[0] : "foundation";
});

const chapterModes = {
  1: [
    ["all", "All RAID"],
    ["traditional", "Traditional RAID"],
    ["raid2", "RAID 2.0+"],
    ["huawei", "Dynamic / RAID-TP"]
  ],
  2: [
    ["all", "All Networks"],
    ["das", "DAS"],
    ["nas", "NAS"],
    ["san", "SAN / IP / FC"],
    ["compare", "DAS vs NAS vs SAN"],
    ["distributed", "Scale-out"]
  ],
  3: [
    ["all", "All Protocols"],
    ["sanproto", "SAN Protocols"],
    ["pcie", "PCIe / NVMe"],
    ["rdma", "RDMA / RoCE"],
    ["nasproto", "NAS Protocols"],
    ["object", "Object / HDFS"],
    ["compareproto", "Protocol Sorting"]
  ],
  review: [
    ["all", "Main Mixed Review"]
  ],
  mistakes: [
    ["all", "All Mock Mistakes"],
    ["foundation", "Foundations"],
    ["hardware", "Hardware / Media"],
    ["smart", "Smart Features"],
    ["protection", "Protection"],
    ["om", "O&M Tools"],
    ["products", "Products"]
  ],
  notebook: [
    ["all", "All Saved Misses"],
    ["multi", "Multi-select"],
    ["recent", "Recent"]
  ],
  4: [
    ["all", "All System"],
    ["components", "Components"],
    ["disks", "HDD / SSD"],
    ["interfaces", "Interfaces"],
    ["expansion", "Expansion"],
    ["ioflow", "Read / Write Flow"],
    ["compareSystem", "Sorting"]
  ]
};

let activeChapter = 1;
let activeMode = "all";
let order = [];
let currentIndex = 0;
let selected = false;
let score = 0;
let streak = 0;
let answered = 0;
let currentAnswerOrder = [];
let selectedAnswers = new Set();
let sessionCorrect = 0;
let sessionAnswered = 0;
let quizFinished = false;

const attemptsKey = "hcia-storage-raid-quiz-attempts-v1";
const notebookKey = "hcia-storage-mistake-notebook-v1";
const highlightTerms = [
  "SmartMigration",
  "SmartIndexing",
  "SmartMatrix",
  "SmartThin",
  "SmartTier",
  "HyperMetro",
  "HyperClone",
  "HyperCDP",
  "DeviceManager",
  "OceanStor Pacific",
  "OceanStor",
  "eService",
  "SmartKit",
  "Redfish",
  "RESTful",
  "SNMP",
  "RBAC",
  "ACL",
  "PBAC",
  "ABAC",
  "ITIL",
  "ISO2000",
  "ISO 20000",
  "IEEE",
  "SNIA",
  "TOE NIC",
  "iSCSI HBA",
  "LAN Free",
  "Server Free",
  "Copy-on-write",
  "COW",
  "QLC",
  "TLC",
  "MLC",
  "SLC",
  "Controller Enclosure",
  "Disk Enclosure",
  "Expansion Module",
  "Interface Module",
  "Front-End",
  "Back-End",
  "Front-end",
  "Back-end",
  "Local Write",
  "Non-local Write",
  "Local Read",
  "Non-local Read",
  "Read/write head",
  "Average access time",
  "Data transfer rate",
  "Rotation speed",
  "Scale-up",
  "Scale-out",
  "Smart disk enclosure",
  "SmartIO",
  "Coffer Disk",
  "Dirty cache",
  "Dirty data",
  "Cache hit",
  "BBU",
  "SCM",
  "HDD",
  "SSD",
  "SLC",
  "MLC",
  "TLC",
  "QLC",
  "Platter",
  "Spindle",
  "Actuator arm",
  "Controller",
  "RAID-TP",
  "RAID 2.0+",
  "RAID 10",
  "RAID 50",
  "RAID 0",
  "RAID 1",
  "RAID 3",
  "RAID 5",
  "RAID 6",
  "Dynamic RAID",
  "Traditional RAID",
  "All RAID",
  "DAS",
  "NAS",
  "SAN",
  "IP SAN",
  "FC SAN",
  "iSCSI",
  "Fibre Channel",
  "FC",
  "SCSI",
  "SAS",
  "PCIe",
  "NVMe over Fabrics",
  "NVMe-oF",
  "NVMe",
  "RDMA",
  "RoCEv2",
  "RoCEv1",
  "RoCE",
  "NFSv3",
  "NFSv4",
  "NFS",
  "CIFS",
  "SMB",
  "HTTP",
  "HTTPS",
  "WebDAV",
  "FTP",
  "NDMP",
  "S3",
  "RESTful",
  "REST",
  "HDFS",
  "NameNode",
  "DataNode",
  "LUN",
  "Thin LUN",
  "Thick LUN",
  "Grain",
  "Extent",
  "Chunk",
  "CK",
  "CKG",
  "Disk Domain",
  "Storage Pool",
  "Storage Tier",
  "VLAN",
  "Logical Port",
  "IP Address Failover",
  "Failover",
  "Zoning",
  "Scale-out",
  "Front-end",
  "Back-end",
  "Management network",
  "Initiator",
  "Target",
  "Parity",
  "Mirroring",
  "Striping",
  "Hot Spare",
  "Rebuild",
  "Reconstruction",
  "XOR",
  "JBOD",
  "TOE NIC",
  "iSCSI HBA",
  "FC HBA",
  "IQN",
  "Bucket",
  "Object"
].sort((a, b) => b.length - a.length);

const scoreEl = document.querySelector("#score");
const streakEl = document.querySelector("#streak");
const answeredEl = document.querySelector("#answered");
const questionTagEl = document.querySelector("#questionTag");
const questionCountEl = document.querySelector("#questionCount");
const questionTextEl = document.querySelector("#questionText");
const answersEl = document.querySelector("#answers");
const feedbackEl = document.querySelector("#feedback");
const resultsEl = document.querySelector("#results");
const explainBtn = document.querySelector("#explainBtn");
const hintBtn = document.querySelector("#hintBtn");
const nextBtn = document.querySelector("#nextBtn");
const shuffleBtn = document.querySelector("#shuffleBtn");
const attemptsListEl = document.querySelector("#attemptsList");
const clearAttemptsBtn = document.querySelector("#clearAttemptsBtn");
const notebookListEl = document.querySelector("#notebookList");
const clearNotebookBtn = document.querySelector("#clearNotebookBtn");
const tooltip = document.querySelector("#tooltip");
const chapterFolders = document.querySelector(".chapter-folders");
const modeRow = document.querySelector(".mode-row");
const heroTitle = document.querySelector(".hero-copy h2");
const heroText = document.querySelector(".hero-copy p");
const chapterCard = document.querySelector(".chapter-card");
const learningPanelTitle = document.querySelector(".learning-panel h2");
const topicList = document.querySelector(".topic-list");

function filteredQuestions() {
  if (activeChapter === "notebook") {
    return notebookQuestions();
  }

  const sources = {
    1: questions,
    2: networkQuestions,
    3: protocolQuestions,
    review: reviewQuestions,
    mistakes: mockMistakeQuestions,
    4: systemQuestions
  };
  const source = sources[activeChapter] || questions;
  if (activeChapter === "mistakes" && activeMode !== "all") {
    return source.filter((question) => question.section === activeMode);
  }
  return source.filter((question) => activeMode === "all" || question.mode === activeMode);
}

function notebookQuestions() {
  const entries = loadNotebook();
  let filtered = entries;
  if (activeMode === "multi") {
    filtered = entries.filter((entry) => correctIndexes(entry.question).length > 1);
  } else if (activeMode === "recent") {
    filtered = [...entries]
      .sort((a, b) => new Date(b.lastMissedAt) - new Date(a.lastMissedAt))
      .slice(0, 15);
  }
  return filtered.map((entry) => ({
    ...entry.question,
    tag: `${entry.question.tag} · missed ${entry.misses}x`
  }));
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function resetOrder() {
  order = shuffle(filteredQuestions().map((_, index) => index));
  currentIndex = 0;
  selected = false;
  sessionCorrect = 0;
  sessionAnswered = 0;
  quizFinished = false;
  nextBtn.textContent = "Next";
  renderQuestion();
}

function currentQuestion() {
  const list = filteredQuestions();
  return list[order[currentIndex]];
}

function renderQuestion() {
  const list = filteredQuestions();
  if (!list.length) {
    quizFinished = true;
    selected = true;
    resultsEl.className = "results";
    resultsEl.innerHTML = `
      <h3>No questions here yet.</h3>
      <p>Miss questions in any quiz to fill the Mistake Notebook, or choose another section.</p>
    `;
    answersEl.innerHTML = "";
    answersEl.classList.add("hidden");
    feedbackEl.className = "feedback hidden";
    feedbackEl.innerHTML = "";
    questionTagEl.textContent = "Empty";
    questionCountEl.textContent = "0 / 0";
    questionTextEl.textContent = "Nothing to retry yet.";
    hintBtn.classList.add("hidden");
    explainBtn.classList.add("hidden");
    nextBtn.textContent = "Retry";
    return;
  }
  const question = currentQuestion();
  quizFinished = false;
  selected = false;
  selectedAnswers = new Set();
  currentAnswerOrder = shuffle(question.a.map((_, index) => index));
  resultsEl.className = "results hidden";
  resultsEl.innerHTML = "";
  answersEl.classList.remove("hidden");
  explainBtn.classList.remove("hidden");
  questionTagEl.textContent = question.tag;
  questionCountEl.textContent = `${currentIndex + 1} / ${list.length}`;
  questionTextEl.innerHTML = `${highlightQuestion(question.q)}${isMultiSelect(question) ? ' <span class="multi-hint">Select all that apply</span>' : ""}`;
  feedbackEl.className = "feedback hidden";
  feedbackEl.innerHTML = "";
  hintBtn.classList.remove("hidden");
  answersEl.innerHTML = "";
  nextBtn.textContent = "Submit";

  currentAnswerOrder.forEach((answerIndex) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = question.a[answerIndex];
    button.addEventListener("click", () => chooseAnswer(answerIndex));
    answersEl.appendChild(button);
  });
}

function correctIndexes(question) {
  return Array.isArray(question.correct) ? question.correct : [question.correct];
}

function isMultiSelect(question) {
  return correctIndexes(question).length > 1;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightQuestion(question) {
  let html = escapeHtml(question);
  highlightTerms.forEach((term) => {
    const escaped = escapeHtml(term);
    const pattern = new RegExp(`(^|[^A-Za-z0-9+.-])(${escapeRegExp(escaped)})(?=$|[^A-Za-z0-9+.-])`, "gi");
    html = html.replace(pattern, '$1<mark class="question-mark">$2</mark>');
  });
  return html;
}

function chooseAnswer(index) {
  if (selected) return;
  const question = currentQuestion();
  if (isMultiSelect(question)) {
    if (selectedAnswers.has(index)) {
      selectedAnswers.delete(index);
    } else {
      selectedAnswers.add(index);
    }
    [...document.querySelectorAll(".answer-btn")].forEach((button, buttonIndex) => {
      const originalAnswerIndex = currentAnswerOrder[buttonIndex];
      button.classList.toggle("selected", selectedAnswers.has(originalAnswerIndex));
    });
    return;
  }
  selectedAnswers = new Set([index]);
  [...document.querySelectorAll(".answer-btn")].forEach((button, buttonIndex) => {
    const originalAnswerIndex = currentAnswerOrder[buttonIndex];
    button.classList.toggle("selected", selectedAnswers.has(originalAnswerIndex));
  });
}

function sameAnswerSet(selectedIndexes, correct) {
  if (selectedIndexes.length !== correct.length) return false;
  const selectedSet = new Set(selectedIndexes);
  return correct.every((index) => selectedSet.has(index));
}

function gradeAnswer(selectedIndexes) {
  if (selected) return;
  selected = true;
  const question = currentQuestion();
  const correctList = correctIndexes(question);
  const correct = sameAnswerSet(selectedIndexes, correctList);
  const buttons = [...document.querySelectorAll(".answer-btn")];

  buttons.forEach((button, buttonIndex) => {
    const originalAnswerIndex = currentAnswerOrder[buttonIndex];
    button.disabled = true;
    if (correctList.includes(originalAnswerIndex)) button.classList.add("correct");
    if (selectedIndexes.includes(originalAnswerIndex) && !correctList.includes(originalAnswerIndex)) button.classList.add("wrong");
  });

  answered += 1;
  if (correct) {
    score += 10 + Math.min(streak, 5);
    streak += 1;
    sessionCorrect += 1;
  } else {
    streak = 0;
    saveMistake(question, selectedIndexes);
  }
  sessionAnswered += 1;
  updateStats();
  showFeedback(correct);
  renderNotebook();
  hintBtn.classList.add("hidden");
  nextBtn.textContent = "Next";
}

function showFeedback(correct) {
  const question = currentQuestion();
  const hook = memoryHook(question);
  feedbackEl.className = `feedback ${correct ? "good" : "bad"}`;
  feedbackEl.innerHTML = `
    <strong>${correct ? "Correct." : "Not yet."}</strong>
    <p>${question.explain}</p>
    <div class="minecraft-note">
      <b>${analogyLabel()}:</b> ${hook}
    </div>
  `;
}

function analogyLabel() {
  return "Memory hook";
}

function showExplanation() {
  showFeedback(false);
  feedbackEl.className = "feedback";
}

function hintForQuestion(question) {
  const text = `${question.tag} ${question.q} ${question.explain}`.toLowerCase();
  const prefix = isMultiSelect(question)
    ? "Multi-select: judge each option separately. "
    : "Single answer: look for the one statement that matches the wording. ";

  if (text.includes("incorrect") || text.includes("not a feature") || text.includes("cannot") || text.includes("not supporting")) return prefix + "This is a negative-wording trap. Find the false statement, not the familiar true one.";
  if (text.includes("smartthin")) return prefix + "Think thin provisioning: on-demand allocation and virtual capacity larger than physical capacity.";
  if (text.includes("smarttier")) return prefix + "Hot/frequently accessed data should move to or start in the high-performance tier.";
  if (text.includes("hypercdp")) return prefix + "HyperCDP facts: very short point-in-time copies, 3-second minimum interval, consistency groups support rollback.";
  if (text.includes("hyperclone")) return prefix + "Clone questions care about split, reverse synchronization, and multiple target LUNs.";
  if (text.includes("hypermetro")) return prefix + "For static priority, focus on which site is priority and what kind of link failed.";
  if (text.includes("snapshot") || text.includes("cow")) return prefix + "COW keeps old source blocks from the snapshot point. Later modified data is the trap.";
  if (text.includes("logical port")) return prefix + "Logical ports are virtual service ports based on Ethernet/bond/VLAN ports, and IP addresses must be unique.";
  if (text.includes("raid 10")) return prefix + "RAID 10 does not survive any two disk failures; same mirror pair is the danger.";
  if (text.includes("raid 2.0")) return prefix + "RAID 2.0+ uses virtualization and distributed spare capacity. Manual independent hot spare disks are suspicious.";
  if (text.includes("das")) return prefix + "DAS weak points: scaling, sharing, central management, and querying scattered data.";
  if (text.includes("nvme")) return prefix + "NVMe advantages are performance-oriented: low latency, high bandwidth, high IOPS, and efficient operation.";
  if (text.includes("slc") || text.includes("mlc") || text.includes("tlc") || text.includes("qlc")) return prefix + "Cell bit order: SLC 1, MLC 2, TLC 3, QLC 4.";
  if (text.includes("toe nic") || text.includes("iscsi hba")) return prefix + "Host CPU busy with iSCSI/TCP conversion means offload: TOE NIC or iSCSI HBA.";
  if (text.includes("eservice")) return prefix + "The tool that automatically reports alarms to Huawei support is eService.";
  if (text.includes("rbac")) return prefix + "RBAC means role-based access control.";
  if (text.includes("hdfs")) return prefix + "NameNode is metadata; DataNode stores actual data.";
  if (text.includes("bbu") || text.includes("coffer")) return prefix + "BBU is emergency power; coffer disk stores critical data during failure.";
  if (text.includes("front-end") || text.includes("back-end")) return prefix + "Front-end faces hosts. Back-end faces disks/internal storage paths.";
  if (text.includes("scale-out")) return prefix + "Scale-out means horizontal growth with nodes/controllers, pooling, and elastic redundancy.";

  return prefix + "Classify the topic first: RAID/protection, block SAN, file NAS, object/big-data, hardware/media, or O&M tool.";
}

function showHint() {
  if (selected || quizFinished) return;
  const question = currentQuestion();
  feedbackEl.className = "feedback hint";
  feedbackEl.innerHTML = `
    <strong>Hint</strong>
    <p>${hintForQuestion(question)}</p>
  `;
}

function nextQuestion() {
  if (quizFinished) {
    resetOrder();
    return;
  }

  const question = currentQuestion();
  if (!selected) {
    if (!selectedAnswers.size) {
      feedbackEl.className = "feedback";
      feedbackEl.innerHTML = `
        <strong>Select at least one option.</strong>
        <p>Pick your answer${isMultiSelect(question) ? "s" : ""}, then press Submit.</p>
      `;
      return;
    }
    gradeAnswer([...selectedAnswers]);
    return;
  }

  currentIndex += 1;
  if (currentIndex >= order.length) {
    finishQuiz();
    return;
  }
  renderQuestion();
}

function updateStats() {
  scoreEl.textContent = score;
  streakEl.textContent = streak;
  answeredEl.textContent = answered;
}

function finishQuiz() {
  quizFinished = true;
  const total = filteredQuestions().length;
  const percent = Math.round((sessionCorrect / total) * 100);
  saveAttempt({
    chapter: activeChapter,
    mode: activeMode,
    correct: sessionCorrect,
    total,
    percent,
    date: new Date().toISOString()
  });
  renderAttempts();

  questionTagEl.textContent = "Quiz Complete";
  questionCountEl.textContent = `${total} / ${total}`;
  questionTextEl.textContent = "Round finished.";
  answersEl.innerHTML = "";
  answersEl.classList.add("hidden");
  feedbackEl.className = "feedback hidden";
  feedbackEl.innerHTML = "";
  hintBtn.classList.add("hidden");
  explainBtn.classList.add("hidden");
  nextBtn.textContent = "Reattempt";
  resultsEl.className = "results";
  resultsEl.innerHTML = `
    <h3>${modeLabel(activeMode)} Score</h3>
    <div class="result-number">${percent}%</div>
    <p>You got <strong>${sessionCorrect}</strong> out of <strong>${total}</strong> correct.</p>
    <p>${resultMessage(percent)}</p>
  `;
}

function resultMessage(percent) {
  if (percent >= 85) return "Strong. Move to the next section or do the mixed review for this chapter.";
  if (percent >= 70) return "Close. Review misses, then reattempt once.";
  if (percent >= 50) return "Useful progress. Focus on the weak terms before another run.";
  return "Start with hover explanations and the simpler modes, then reattempt.";
}

function modeLabel(mode) {
  const entry = (chapterModes[activeChapter] || []).find(([value]) => value === mode);
  if (entry) return entry[1];
  const fallback = Object.values(chapterModes).flat().find(([value]) => value === mode);
  return fallback ? fallback[1] : mode;
}

function attemptModeLabel(attempt) {
  const modes = chapterModes[attempt.chapter || 1] || chapterModes[1];
  const entry = modes.find(([value]) => value === attempt.mode);
  return entry ? entry[1] : attempt.mode;
}

function chapterLabel(chapter) {
  const labels = {
    1: "Chapter 1: RAID Technologies",
    2: "Chapter 2: Storage Network Architecture",
    3: "Chapter 3: Common Storage Protocols",
    review: "Checkpoint: Chapters 1-3 Review",
    mistakes: "Mock Mistakes Trainer",
    notebook: "Mistake Notebook",
    4: "Chapter 4: Intelligent Data Storage System"
  };
  return labels[chapter] || `Chapter ${chapter}`;
}

function loadAttempts() {
  try {
    return JSON.parse(localStorage.getItem(attemptsKey)) || [];
  } catch {
    return [];
  }
}

function saveAttempt(attempt) {
  const attempts = loadAttempts();
  attempts.unshift(attempt);
  localStorage.setItem(attemptsKey, JSON.stringify(attempts.slice(0, 50)));
}

function clearAttempts() {
  localStorage.removeItem(attemptsKey);
  renderAttempts();
}

function questionKey(question) {
  return question.id || `${question.tag}|${question.q}`;
}

function formatAnswerList(question, indexes) {
  return indexes
    .map((index) => `${String.fromCharCode(65 + index)}. ${question.a[index]}`)
    .join("; ");
}

function loadNotebook() {
  try {
    return JSON.parse(localStorage.getItem(notebookKey)) || [];
  } catch {
    return [];
  }
}

function saveNotebook(entries) {
  localStorage.setItem(notebookKey, JSON.stringify(entries.slice(0, 120)));
}

function saveMistake(question, selectedIndexes) {
  const entries = loadNotebook();
  const key = questionKey(question);
  const cleanQuestion = {
    id: question.id,
    mode: question.mode,
    section: question.section,
    tag: question.tag,
    q: question.q,
    a: question.a,
    correct: question.correct,
    explain: question.explain
  };
  const existing = entries.find((entry) => entry.key === key);
  const now = new Date().toISOString();
  if (existing) {
    existing.question = cleanQuestion;
    existing.selected = selectedIndexes;
    existing.correct = correctIndexes(question);
    existing.misses += 1;
    existing.lastMissedAt = now;
    return saveNotebook(entries);
  }
  entries.unshift({
    key,
    question: cleanQuestion,
    selected: selectedIndexes,
    correct: correctIndexes(question),
    misses: 1,
    firstMissedAt: now,
    lastMissedAt: now
  });
  saveNotebook(entries);
}

function clearNotebook() {
  localStorage.removeItem(notebookKey);
  renderNotebook();
  if (activeChapter === "notebook") resetOrder();
}

function renderAttempts() {
  const attempts = loadAttempts();
  if (!attempts.length) {
    attemptsListEl.innerHTML = '<p class="empty-attempts">No attempts saved yet. Finish a quiz round to start tracking.</p>';
    return;
  }

  attemptsListEl.innerHTML = attempts.map((attempt, index) => {
    const date = new Date(attempt.date);
    const dateText = Number.isNaN(date.getTime()) ? "Unknown time" : date.toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    return `
      <article class="attempt-row">
        <div>
          <strong>${chapterLabel(attempt.chapter || 1)} · ${attemptModeLabel(attempt)}</strong>
          <small>Attempt ${attempts.length - index} · ${dateText}</small>
        </div>
        <div class="attempt-stat">${attempt.correct}/${attempt.total}</div>
        <div class="attempt-stat">${attempt.percent}%</div>
        <div class="attempt-stat">${attempt.percent >= 70 ? "Pass zone" : "Review"}</div>
      </article>
    `;
  }).join("");
}

function renderNotebook() {
  const entries = loadNotebook();
  if (!entries.length) {
    notebookListEl.innerHTML = '<p class="empty-attempts">No mistakes saved yet. Missed questions will appear here automatically.</p>';
    return;
  }

  notebookListEl.innerHTML = entries.slice(0, 12).map((entry) => {
    const date = new Date(entry.lastMissedAt);
    const dateText = Number.isNaN(date.getTime()) ? "Unknown time" : date.toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    return `
      <article class="notebook-row">
        <div>
          <strong>${entry.question.tag}</strong>
          <p>${escapeHtml(entry.question.q)}</p>
          <small>Last missed ${dateText} · missed ${entry.misses}x</small>
        </div>
        <div class="notebook-answers">
          <span><b>Your last pick:</b> ${escapeHtml(formatAnswerList(entry.question, entry.selected))}</span>
          <span><b>Correct:</b> ${escapeHtml(formatAnswerList(entry.question, correctIndexes(entry.question)))}</span>
        </div>
      </article>
    `;
  }).join("");
}

function memoryHook(question) {
  const text = `${question.tag} ${question.q} ${question.explain}`.toLowerCase();

  if (text.includes("smartthin")) return "SmartThin = thin provisioning. It presents large logical capacity and allocates physical space only when data is written.";
  if (text.includes("smarttier")) return "SmartTier = hot data moves upward. Frequently accessed data should use or migrate to the high-performance tier.";
  if (text.includes("smartmigration")) return "SmartMigration = full LUN migration. Source data is copied to a target LUN, then the target can take over services.";
  if (text.includes("smartmatrix")) return "SmartMatrix = controller/module sharing in OceanStor all-flash. A controller failure should not interrupt services.";
  if (text.includes("smartindexing")) return "Do not assume every multi-protocol feature is SmartIndexing. Check the exact feature name the question asks about.";
  if (text.includes("hypercdp")) return "HyperCDP = very short point-in-time copies. Remember the mock fact: minimum schedule interval is 3 seconds; consistency groups support create/delete/rollback.";
  if (text.includes("hyperclone")) return "HyperClone = clone copy. It can split a target LUN, reverse-sync for logical faults, and create multiple target LUNs.";
  if (text.includes("hypermetro")) return "HyperMetro = active-active. Static priority means the priority site wins specific failure decisions; read the failure scenario carefully.";
  if (text.includes("snapshot") || text.includes("cow")) return "Snapshot/COW trap: COW protects the old source blocks from the snapshot time, not the later modified data.";
  if (text.includes("rollback")) return "Rollback copies snapshot data back to the source. Be careful with statements that invent host-write behavior during rollback.";
  if (text.includes("eservice")) return "eService = automatically reports alarms to Huawei service/support. DeviceManager is local management; CLI is command-line management.";
  if (text.includes("dme") || text.includes("redfish")) return "DME integration protocols in the mock: RESTful, SSH, SNMP are valid; Redfish was the odd one out.";
  if (text.includes("rbac")) return "RBAC = role-based access control. OceanStor Pacific access control in the mock maps to RBAC.";
  if (text.includes("itil") || text.includes("iso2000") || text.includes("snia") || text.includes("ieee")) return "O&M standard systems: ITIL and ISO2000/ISO 20000. IEEE and SNIA are not the O&M standard systems for that question.";
  if (text.includes("cli") && text.includes("change user")) return "CLI command syntax: first word is operation, next word is object, key=value pairs are parameters. change user user_name=... level=admin changes user level.";
  if (text.includes("raid 10")) return "RAID 10 failure tolerance depends on which disks fail. Two failed disks in the same mirror pair can lose data.";
  if (text.includes("raid 2.0")) return "RAID 2.0+ = block virtualization, distributed spare capacity, thin reconstruction, many-to-many rebuild. It does not require manually configured hot spare disks.";
  if (text.includes("raid 0")) return "RAID 0 = striping only. Fast, no parity, no redundancy.";
  if (text.includes("raid 5")) return "RAID 5 = distributed parity, tolerates one disk failure.";
  if (text.includes("raid 6")) return "RAID 6 = double distributed parity, tolerates two disk failures.";
  if (text.includes("stripe") || text.includes("striping")) return "Strip = consecutive sectors on one disk. Stripe = same-position strips across disks. Huawei likes reversing those words.";
  if (text.includes("extent")) return "Extent = unit for migration and hot-data statistics. Do not assume one storage pool has arbitrary mixed extent sizes.";
  if (text.includes("logical port")) return "Logical port = virtual service port based on Ethernet/bond/VLAN port. It carries host services and has an IP; different logical ports cannot share the same IP.";
  if (text.includes("toe nic") || text.includes("iscsi hba")) return "iSCSI software initiator uses host CPU. TOE NIC or iSCSI HBA offloads that processing; faster Ethernet or more capacity does not solve CPU overhead.";
  if (text.includes("pcie scale-out") || text.includes("ip scale-out")) return "PCIe scale-out uses PCIe/RDMA controller interconnect behavior. Ethernet/iWARP belongs to IP/RDMA concepts, not PCIe scale-out.";
  if (text.includes("scale-out")) return "Scale-out = horizontal expansion by adding nodes/controllers, resource pooling, virtualization, and elastic redundancy. A statement saying it lacks EC is suspicious.";
  if (text.includes("das")) return "DAS = direct-attached block storage. Main weaknesses: poor scalability, scattered management, weak sharing, hard cross-device query.";
  if (text.includes("nas") && text.includes("san")) return "SAN is block storage, often for structured data/databases. NAS is file storage, often for unstructured files.";
  if (text.includes("san")) return "SAN = network block storage. The host sees remote storage as disk-like blocks, not shared folders.";
  if (text.includes("nfs")) return "NFS = Unix/Linux file sharing. NFSv3 is stateless; NFSv4 is stateful and stronger on security/locking.";
  if (text.includes("cifs") || text.includes("smb")) return "CIFS/SMB = Windows-style file sharing. It is file-level NAS, not block storage.";
  if (text.includes("hdfs")) return "HDFS: NameNode manages metadata; DataNode stores actual data blocks.";
  if (text.includes("s3") || text.includes("swift")) return "S3/Swift = object storage protocols. Do not confuse object access protocols with block SAN protocols.";
  if (text.includes("nvme")) return "NVMe advantages in the mock: low latency, high bandwidth, high IOPS, and low power consumption.";
  if (text.includes("slc") || text.includes("mlc") || text.includes("tlc") || text.includes("qlc")) return "Flash cell order: SLC=1 bit, MLC=2, TLC=3, QLC=4. More bits usually means cheaper but lower endurance.";
  if (text.includes("scm")) return "SCM = persistent high-speed storage-class media. It is not simply server memory.";
  if (text.includes("bbu") && text.includes("coffer")) return "BBU supplies temporary power. Coffer disk stores critical dirty cache/config/log data during power failure.";
  if (text.includes("controller enclosure") && text.includes("disk enclosure")) return "Controller enclosure processes I/O and holds controller modules. Disk enclosure mainly holds drives and expansion modules.";
  if (text.includes("front-end") && text.includes("back-end")) return "Front-end faces hosts/application servers. Back-end faces disk enclosures or internal storage paths.";
  if (text.includes("local write") || text.includes("non-local write") || text.includes("owning engine")) return "Owner engine rule: local I/O reaches the owning engine first; non-local I/O is forwarded to the owner.";
  if (text.includes("cabling") || text.includes("mini sas")) return "Cabling trap: FC optical fiber can connect HBA to FC switch/storage. Mini SAS HD has electrical and optical forms; do not invent PCIe-to-switch use.";
  if (text.includes("backup") || text.includes("lan free") || text.includes("server free")) return "LAN Free and Server Free backup modes are designed to reduce host/LAN impact compared with traditional backup.";
  if (text.includes("rpo")) return "RPO measures acceptable data loss point. RTO measures time to restore service.";

  return "Exam rule: identify the category first, then test each option independently. Most traps are false absolutes, swapped terms, or wrong Huawei feature names.";
}

function setMode(mode) {
  activeMode = mode;
  nextBtn.textContent = "Next";
  modeRow.querySelectorAll(".mode-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  resetOrder();
}

function renderModeButtons() {
  const modes = chapterModes[activeChapter] || chapterModes[1];
  modeRow.innerHTML = "";
  modes.forEach(([value, label]) => {
    const button = document.createElement("button");
    button.className = `mode-btn${value === activeMode ? " active" : ""}`;
    button.type = "button";
    button.dataset.mode = value;
    button.textContent = label;
    button.addEventListener("click", () => setMode(value));
    modeRow.appendChild(button);
  });
  const shuffle = document.createElement("button");
  shuffle.id = "shuffleBtn";
  shuffle.className = "icon-btn";
  shuffle.title = "Shuffle questions";
  shuffle.setAttribute("aria-label", "Shuffle questions");
  shuffle.textContent = "↻";
  shuffle.addEventListener("click", resetOrder);
  modeRow.appendChild(shuffle);
}

function setChapter(chapter) {
  activeChapter = chapter;
  activeMode = "all";
  document.querySelectorAll(".folder-card").forEach((card) => {
    card.classList.toggle("active", String(card.dataset.chapter) === String(chapter));
  });

  if (chapter === 1) {
    heroTitle.textContent = "Chapter 1: RAID Technologies";
    heroText.textContent = "Learn the exam rules for traditional RAID, RAID 2.0+, Dynamic RAID, and RAID-TP. Hover highlighted terms for simple, technical, and memory hooks.";
    chapterCard.innerHTML = "<span>PDF range</span><strong>p126-p169</strong><small>44 pages compressed into quiz loops</small>";
    learningPanelTitle.textContent = "What To Know";
    topicList.innerHTML = `
      <article><h3>Core Ideas</h3><p><span class="term" data-term="raid">RAID</span> combines disks into a logical disk. It improves capacity, performance, and/or reliability using <span class="term" data-term="striping">striping</span>, <span class="term" data-term="mirroring">mirroring</span>, and <span class="term" data-term="parity">parity</span>.</p></article>
      <article><h3>Traditional RAID</h3><p>Know RAID 0, 1, 3, 5, 6, 10, and 50. The exam likes failure tolerance, performance tradeoffs, and whether parity is dedicated or distributed.</p></article>
      <article><h3>RAID 2.0+</h3><p>Huawei RAID 2.0+ virtualizes disks into <span class="term" data-term="chunk">chunks</span>, <span class="term" data-term="ckg">CKGs</span>, <span class="term" data-term="extent">extents</span>, and storage pools. Its big win is faster many-to-many reconstruction.</p></article>
      <article><h3>Other Huawei RAID</h3><p><span class="term" data-term="dynamicRaid">Dynamic RAID</span> handles flash block failures efficiently. <span class="term" data-term="raidTp">RAID-TP</span> tolerates three disk failures and targets large-capacity disk risk.</p></article>
    `;
  } else if (chapter === 2) {
    heroTitle.textContent = "Chapter 2: Storage Network Architecture";
    heroText.textContent = "Learn DAS, NAS, SAN, IP SAN, FC SAN, logical ports, VLANs, failover, and scale-out storage networking.";
    chapterCard.innerHTML = "<span>PDF range</span><strong>p241-p283</strong><small>43 pages compressed into quiz loops</small>";
    learningPanelTitle.textContent = "What To Know";
    topicList.innerHTML = `
      <article><h3>DAS</h3><p><span class="term" data-term="das">DAS</span> is directly connected block storage. It is simple, but has weak scalability and sharing.</p></article>
      <article><h3>NAS</h3><p><span class="term" data-term="nas">NAS</span> provides file sharing over IP networks using <span class="term" data-term="nfs">NFS</span> and <span class="term" data-term="cifs">CIFS/SMB</span>.</p></article>
      <article><h3>SAN</h3><p><span class="term" data-term="san">SAN</span> provides block storage over dedicated storage networks, commonly <span class="term" data-term="iscsi">iSCSI</span> or <span class="term" data-term="fc">FC</span>.</p></article>
      <article><h3>Scale-out</h3><p><span class="term" data-term="scaleOut">Scale-out storage</span> spreads data across nodes using front-end, back-end, and management networks.</p></article>
    `;
  } else if (chapter === 3) {
    heroTitle.textContent = "Chapter 3: Common Storage Protocols";
    heroText.textContent = "Learn SCSI, SAS, iSCSI, FC, PCIe, NVMe, RDMA, RoCE, CIFS, NFS, HTTP, FTP, NDMP, S3, and HDFS by sorting each protocol into the right storage role.";
    chapterCard.innerHTML = "<span>PDF range</span><strong>p170-p240</strong><small>71 pages compressed into quiz loops</small>";
    learningPanelTitle.textContent = "What To Know";
    topicList.innerHTML = `
      <article><h3>SAN Protocols</h3><p><span class="term" data-term="scsi">SCSI</span> is the command model. <span class="term" data-term="sas">SAS</span>, <span class="term" data-term="iscsi">iSCSI</span>, and <span class="term" data-term="fc">FC</span> are ways to carry storage traffic.</p></article>
      <article><h3>Fast SSD Protocols</h3><p><span class="term" data-term="pcie">PCIe</span> is the high-speed bus. <span class="term" data-term="nvme">NVMe</span> is the protocol designed for PCIe SSDs.</p></article>
      <article><h3>Low-Latency Networks</h3><p><span class="term" data-term="rdma">RDMA</span> enables low-latency memory access over networks. <span class="term" data-term="roce">RoCE</span> carries RDMA over Ethernet.</p></article>
      <article><h3>File, Object, Big Data</h3><p><span class="term" data-term="nfs">NFS</span> and <span class="term" data-term="cifs">CIFS/SMB</span> are file sharing. <span class="term" data-term="s3">S3</span> is object storage. <span class="term" data-term="hdfs">HDFS</span> is big data distributed file storage.</p></article>
    `;
  } else if (chapter === "review") {
    heroTitle.textContent = "Checkpoint: Chapters 1-3 Review";
    heroText.textContent = "A mixed diagnostic quiz with the main RAID, network architecture, and protocol questions. Use this before Chapter 4 to check whether the earlier basics are still active in memory.";
    chapterCard.innerHTML = "<span>Review scope</span><strong>Ch1-Ch3</strong><small>Main questions pulled from existing quiz banks</small>";
    learningPanelTitle.textContent = "What To Check";
    topicList.innerHTML = `
      <article><h3>RAID</h3><p>Know <span class="term" data-term="raid0">RAID 0</span>, <span class="term" data-term="raid1">RAID 1</span>, <span class="term" data-term="raid5">RAID 5</span>, <span class="term" data-term="raid6">RAID 6</span>, <span class="term" data-term="raid10">RAID 10</span>, RAID 2.0+, and why parity/rebuild behavior matters.</p></article>
      <article><h3>Architecture</h3><p><span class="term" data-term="das">DAS</span> is direct block storage, <span class="term" data-term="nas">NAS</span> is shared file storage, and <span class="term" data-term="san">SAN</span> is network block storage.</p></article>
      <article><h3>Protocols</h3><p><span class="term" data-term="scsi">SCSI</span>, <span class="term" data-term="iscsi">iSCSI</span>, and <span class="term" data-term="fc">FC</span> are block/SAN ideas. <span class="term" data-term="nfs">NFS</span> and <span class="term" data-term="cifs">CIFS/SMB</span> are file sharing.</p></article>
      <article><h3>Fast/Distributed Storage</h3><p><span class="term" data-term="nvme">NVMe</span>, <span class="term" data-term="rdma">RDMA</span>, <span class="term" data-term="s3">S3</span>, and <span class="term" data-term="hdfs">HDFS</span> are common exam sorting traps.</p></article>
    `;
  } else if (chapter === "mistakes") {
    heroTitle.textContent = "Mock Mistakes Trainer";
    heroText.textContent = "Drill the exact wrong answers from your Huawei mock attempt, now split into small sections. Multi-answer questions require selecting every correct option before pressing Submit.";
    chapterCard.innerHTML = "<span>Source</span><strong>40 wrong</strong><small>from Question Log.md</small>";
    learningPanelTitle.textContent = "What This Fixes";
    topicList.innerHTML = `
      <article><h3>Multi-select Precision</h3><p>If the question says statements, forms, advantages, phases, or operations, assume more than one answer may be correct. Missing one correct option still fails.</p></article>
      <article><h3>Incorrect Statement Traps</h3><p>Slow down on wording like <strong>incorrect</strong>, <strong>not a feature</strong>, and <strong>cannot</strong>. These questions often hide one false statement among true ones.</p></article>
      <article><h3>Huawei Feature Names</h3><p>Watch names like SmartThin, SmartTier, HyperCDP, HyperClone, HyperMetro, SmartMatrix, eService, DME, and RBAC.</p></article>
      <article><h3>Use The Sections</h3><p>Use Hardware, Smart Features, Protection, O&M, and Products when one big mock-fix session feels too heavy.</p></article>
    `;
  } else if (chapter === "notebook") {
    heroTitle.textContent = "Mistake Notebook";
    heroText.textContent = "Retry questions you personally missed. This notebook updates automatically from every quiz, so your weak spots stay visible and retryable anytime.";
    chapterCard.innerHTML = "<span>Saved misses</span><strong>Anytime</strong><small>auto-saved from wrong answers</small>";
    learningPanelTitle.textContent = "How To Use It";
    topicList.innerHTML = `
      <article><h3>Retry Anytime</h3><p>The notebook is not locked to dates. Open it whenever you want and drill only saved misses.</p></article>
      <article><h3>Best Rule</h3><p>If you miss the same question twice, stop and explain why each option is true or false before moving on.</p></article>
      <article><h3>Multi-select</h3><p>Use the Multi-select mode when you want to train the exact skill that hurt the Huawei mock score.</p></article>
      <article><h3>Recent</h3><p>Use Recent when you want to clean up the mistakes from your latest session without doing the full list.</p></article>
    `;
  } else if (chapter === 4) {
    heroTitle.textContent = "Chapter 4: Intelligent Data Storage System";
    heroText.textContent = "Learn controller enclosures, controllers, BBUs, coffer disks, disk enclosures, HDD/SSD media, interface modules, expansion methods, and local/non-local I/O flow.";
    chapterCard.innerHTML = "<span>PDF range</span><strong>p51-p125</strong><small>75 pages compressed into quiz loops</small>";
    learningPanelTitle.textContent = "What To Know";
    topicList.innerHTML = `
      <article><h3>Controller Side</h3><p><span class="term" data-term="controllerEnclosure">Controller enclosures</span> contain <span class="term" data-term="controller">controllers</span>, <span class="term" data-term="bbu">BBUs</span>, power, management, and interface modules. Front-end ports face hosts; back-end ports face disks/internal paths.</p></article>
      <article><h3>Protection During Power Loss</h3><p><span class="term" data-term="bbu">BBUs</span> provide emergency power. <span class="term" data-term="cofferDisk">Coffer disks</span> store dirty cache, logs, and configuration if power fails.</p></article>
      <article><h3>Disk Side</h3><p><span class="term" data-term="diskEnclosure">Disk enclosures</span> hold disks and <span class="term" data-term="expansionModule">expansion modules</span>. <span class="term" data-term="hdd">HDDs</span> are mechanical; <span class="term" data-term="ssd">SSDs</span> use flash and avoid mechanical seek time.</p></article>
      <article><h3>Expansion and I/O</h3><p><span class="term" data-term="scaleUpSystem">Scale-up</span> adds disks. <span class="term" data-term="scaleOutSystem">Scale-out</span> adds controllers. Local I/O reaches the owning engine first; non-local I/O is forwarded to the owner.</p></article>
    `;
  }

  renderModeButtons();
  renderGlossary();
  renderAttempts();
  renderNotebook();
  resetOrder();
}

function glossaryPreview(item) {
  return item.simple;
}

function renderGlossary() {
  const grid = document.querySelector("#glossaryGrid");
  grid.innerHTML = "";
  const activeKeys = activeChapter === 1
    ? ["raid", "striping", "mirroring", "parity", "raid0", "raid1", "raid5", "raid6", "raid10", "raid50", "chunk", "ckg", "extent", "diskDomain", "storagePool", "lun", "dynamicRaid", "raidTp"]
    : activeChapter === 2
      ? ["das", "nas", "nfs", "cifs", "san", "iscsi", "fc", "vlan", "logicalPort", "ipFailover", "zoning", "scaleOut"]
      : activeChapter === 3
        ? ["scsi", "sas", "iscsi", "fc", "pcie", "nvme", "rdma", "roce", "nfs", "cifs", "s3", "hdfs"]
        : activeChapter === "review"
          ? ["raid", "raid0", "raid1", "raid5", "raid6", "raid10", "chunk", "ckg", "das", "nas", "san", "iscsi", "fc", "scsi", "nvme", "rdma", "nfs", "cifs", "s3", "hdfs"]
          : activeChapter === "mistakes"
            ? ["raid10", "raid0", "chunk", "extent", "das", "san", "nas", "logicalPort", "iscsi", "fc", "nvme", "rdma", "ssd", "scm", "s3", "hdfs"]
            : activeChapter === "notebook"
              ? ["SmartThin", "HyperCDP", "HyperClone", "HyperMetro", "SmartMatrix", "eService", "RBAC", "logicalPort", "raid10", "nvme", "scm", "hdfs"]
              : ["controllerEnclosure", "controller", "frontendPort", "backendPort", "bbu", "cofferDisk", "diskEnclosure", "expansionModule", "hdd", "ssd", "scm", "smartIo", "scaleUpSystem", "scaleOutSystem", "localWrite", "nonLocalWrite"];
  activeKeys.forEach((key) => {
    const item = glossary[key];
    if (!item) return;
    const card = document.createElement("article");
    card.className = "glossary-item";
    card.innerHTML = `<strong><span class="glossary-term" data-term="${key}">${item.title}</span></strong><p>${glossaryPreview(item)}</p>`;
    grid.appendChild(card);
  });
}

function tooltipHtml(item) {
  return `
    <h3>${item.title}</h3>
    <dl>
      <div><dt>Simple</dt><dd>${item.simple}</dd></div>
      <div><dt>Technical</dt><dd>${item.technical}</dd></div>
      <div><dt>${analogyLabel()}</dt><dd>${tooltipHook(item)}</dd></div>
    </dl>
  `;
}

function tooltipHook(item) {
  return `Exam focus: ${item.simple}`;
}

function showTooltip(event) {
  const key = event.target.dataset.term;
  const item = glossary[key];
  if (!item) return;
  tooltip.innerHTML = tooltipHtml(item);
  tooltip.setAttribute("aria-hidden", "false");
  tooltip.classList.remove("hidden");
  moveTooltip(event);
}

function moveTooltip(event) {
  if (tooltip.getAttribute("aria-hidden") === "true") return;
  const padding = 14;
  const rect = tooltip.getBoundingClientRect();
  let left = event.clientX + 16;
  let top = event.clientY + 16;
  if (left + rect.width > window.innerWidth - padding) left = window.innerWidth - rect.width - padding;
  if (top + rect.height > window.innerHeight - padding) top = event.clientY - rect.height - 16;
  tooltip.style.left = `${Math.max(padding, left)}px`;
  tooltip.style.top = `${Math.max(padding, top)}px`;
}

function hideTooltip() {
  tooltip.setAttribute("aria-hidden", "true");
  tooltip.classList.add("hidden");
}

nextBtn.addEventListener("click", nextQuestion);
explainBtn.addEventListener("click", showExplanation);
hintBtn.addEventListener("click", showHint);
clearAttemptsBtn.addEventListener("click", clearAttempts);
clearNotebookBtn.addEventListener("click", clearNotebook);
chapterFolders.addEventListener("click", (event) => {
  const card = event.target.closest(".folder-card");
  if (!card) return;

    const chapter = ["review", "mistakes", "notebook"].includes(card.dataset.chapter) ? card.dataset.chapter : Number(card.dataset.chapter);
    if (chapter === 1 || chapter === 2 || chapter === 3 || chapter === "review" || chapter === "mistakes" || chapter === "notebook" || chapter === 4) {
      setChapter(chapter);
      return;
  }

  feedbackEl.className = "feedback";
  feedbackEl.innerHTML = `
    <strong>${card.querySelector("strong").textContent} is not built yet.</strong>
    <p>For now, use Chapters 1-4 and the checkpoint review.</p>
    <div class="minecraft-note">
      <b>Study path:</b> RAID, network architecture, protocols, mixed review, then intelligent storage system.
    </div>
  `;
  feedbackEl.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.addEventListener("mouseover", (event) => {
  if (event.target.matches("[data-term]")) showTooltip(event);
});
document.addEventListener("mousemove", (event) => {
  if (event.target.matches("[data-term]")) moveTooltip(event);
});
document.addEventListener("mouseout", (event) => {
  if (event.target.matches("[data-term]")) hideTooltip();
});

renderModeButtons();
renderGlossary();
renderAttempts();
renderNotebook();
resetOrder();
updateStats();
